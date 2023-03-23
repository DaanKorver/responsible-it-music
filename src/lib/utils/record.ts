import { instrument, recorder } from '$lib/state/audio';
import { audio } from '$lib/state/notes';
import { isRecording } from '$lib/state/recording';
import { get } from 'svelte/store';
import * as Tone from 'tone';

async function sleep(ms: number) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true);
		}, ms);
	});
}

export async function record() {
	const currentTime = Tone.now();
	const time = Tone.Time('8n').toSeconds();

	Tone.Transport.stop();

	await sleep(1000);

	const iterationTimes = 3;
	let latestTime = 0;

	recorder.start();

	for (let i = 0; i < iterationTimes; i++) {
		get(audio).notes.forEach((column, columnIndex) => {
			column.forEach((note, noteIndex) => {
				if (!note.note) return;
				const timeToUse = (noteIndex + i * 16) * time;
				if (timeToUse > latestTime) latestTime = timeToUse;

				instrument.triggerAttackRelease(note.note, '8n', currentTime + timeToUse);
			});
		});
	}

	setTimeout(async () => {
		const recording = await recorder.stop();

		const url = URL.createObjectURL(recording);
		const anchor = document.createElement('a');
		anchor.download = 'recording.mp3';
		anchor.href = url;
		isRecording.set(false);
		anchor.click();
	}, latestTime * 1000 + 1000);
}
