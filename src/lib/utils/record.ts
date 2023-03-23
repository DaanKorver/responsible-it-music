import { instrument, recorder } from '$lib/state/audio';
import { audio } from '$lib/state/notes';
import { get } from 'svelte/store';
import * as Tone from 'tone';

export function record() {
	//

	const currentTime = Tone.now();
	const time = Tone.Time('8n').toSeconds();

	Tone.Transport.stop();

	const iterationTimes = 3;
	let latestTime = 0;

	recorder.start();

	for (let i = 0; i < iterationTimes; i++) {
		get(audio).notes.forEach((column, columnIndex) => {
			column.forEach((note, noteIndex) => {
				if (!note.note) return;
				console.log(columnIndex);

				const timeToUse = (noteIndex + i * 16) * time;
				if (timeToUse > latestTime) latestTime = timeToUse;

				console.log(currentTime + timeToUse);

				instrument.triggerAttackRelease(note.note, '8n', currentTime + timeToUse);
			});
		});
	}

	setTimeout(async () => {
		const recording = await recorder.stop();

		const url = URL.createObjectURL(recording);
		const anchor = document.createElement('a');
		anchor.download = 'recording.webm';
		anchor.href = url;
		anchor.click();
	}, latestTime * 1000 + 1000);
}
