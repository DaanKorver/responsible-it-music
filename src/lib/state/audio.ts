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

export const recorder = new Tone.Recorder();
export const instrument = new Tone.Sampler({
	urls: {
		A1: 'A1.mp3',
		A2: 'A2.mp3'
	},
	baseUrl: 'https://tonejs.github.io/audio/casio/'
})
	.connect(recorder)
	.toDestination();

export const sampler = derived(audio, ({ notes }) => {
	sequence.set({
		callback: (time: number, column: number) => onSequenceStep(time, column, notes)
	});
	return sequence;
});

export const beatIndex = writable(0);

function onSequenceStep(time: number, column: number, notes: Row[]) {
	// Setting the beat index
	beatIndex.set(column);

	// Playing notes
	notes.forEach((row) => {
		const note = row[column].note;
		if (!note) return;
		instrument.triggerAttackRelease(note, '8n', time);
	});
}
