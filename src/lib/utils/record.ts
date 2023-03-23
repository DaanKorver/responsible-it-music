import { instrument } from '$lib/state/audio';
import { audio } from '$lib/state/notes';
import { get } from 'svelte/store';
import * as Tone from 'tone';

export function record() {
	//
	Tone.Transport.stop();

	const currentTime = Tone.now();
	const time = Tone.Time('8n').toSeconds();
	const iterationTimes = 3;
	let latestTime = 0;

	const recorder = new Tone.Recorder();
	recorder.start();

	for (let i = 0; i < iterationTimes; i++) {
		get(audio).notes.forEach((column, columnIndex) => {
			column.forEach((note) => {
				if (!note.note) return;
				console.log(columnIndex);

				const timeToUse = (columnIndex + i * 16) * time;
				if (timeToUse > latestTime) latestTime = timeToUse;
				console.log(timeToUse);

				console.log(currentTime + timeToUse);

				instrument.triggerAttackRelease(note.note, '8n', currentTime + timeToUse);
			});

			// console.log(note);
		});
	}
	const finishTime = iterationTimes * (16 * time);
	console.log(finishTime);
	setTimeout(() => {
		console.log('done');
	}, finishTime * 1000);
}
