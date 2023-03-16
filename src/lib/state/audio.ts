import { derived, writable } from 'svelte/store';
import { audio, ROW_BUTTONS } from './notes';
import * as Tone from 'tone';

const sequence = new Tone.Sequence(
	() => {
		/* */
	},
	Array.from({ length: ROW_BUTTONS }).map((_, i) => i),
	'8n'
);

const instrument = new Tone.Synth().toDestination();

export const sampler = derived(audio, ($audio) => {
	//
	sequence.set({
		callback: (time: number, column: number) => {
			// Setting the beat index
			beatIndex.set(column);

			// Playing notes
			$audio.notes.forEach((row) => {
				const note = row[column].note;
				if (!note) return;
				instrument.triggerAttackRelease(note, '8n', time);
			});
		}
	});

	return sequence;
});

export const beatIndex = writable(0);
