import { derived, writable } from 'svelte/store';
import { audio, ROW_BUTTONS, type Row } from './notes';
import * as Tone from 'tone';

const sequence = new Tone.Sequence(
	(time, column) => {
		onSequenceStep(time, column, []);
	},
	Array.from({ length: ROW_BUTTONS }).map((_, i) => i),
	'8n'
);

export const pitchShifter = new Tone.PitchShift(0).toDestination();
pitchShifter.windowSize = 0.01;
export const recorder = new Tone.Recorder();
export const instrument = new Tone.Sampler({
	urls: {
		A1: 'A1.mp3',
		A2: 'A2.mp3'
	},
	baseUrl: 'https://tonejs.github.io/audio/casio/'
})
	.connect(pitchShifter)
	.connect(recorder)
	.toDestination();

export const sampler = derived(audio, ({ rows }) => {
	sequence.set({
		callback: (time: number, column: number) => onSequenceStep(time, column, rows)
	});
	return sequence;
});

export const beatIndex = writable(0);

function onSequenceStep(time: number, column: number, rows: Row[]) {
	// Setting the beat index
	beatIndex.set(column);

	// Playing notes
	rows.forEach((row) => {
		const note = row.notes[column].note;
		if (!note) return;
		pitchShifter.pitch = row.pitch;
		console.log(row.pitch);

		instrument.triggerAttackRelease(note, '8n', time);
	});
}
