<script lang="ts">
	import * as Tone from 'tone';
	import PlusIcon from '$lib/icons/plus.svg?component';
	import MinusIcon from '$lib/icons/minus.svg?component';

	const TIME_BEFORE_INCREMENT = 400; //ms
	const INCREMENT_SPEED = 50; //ms -> +-1 every `INCREMENT_SPEED`ms

	let bpm = Tone.Transport.bpm.value;

	let timeout: ReturnType<typeof setTimeout>;
	let interval: ReturnType<typeof setInterval>;
	function updateBPM(increase?: boolean) {
		timeout = setTimeout(() => {
			interval = setInterval(() => {
				Tone.Transport.bpm.value = increase ? bpm++ : bpm--;
			}, INCREMENT_SPEED);
		}, TIME_BEFORE_INCREMENT);

		Tone.Transport.bpm.value = increase ? bpm++ : bpm--;
	}

	function onMouseUp() {
		clearTimeout(timeout);
		clearInterval(interval);
	}
</script>

<div>
	<button on:mousedown={() => updateBPM()} on:mouseup={onMouseUp}><MinusIcon /></button>
	<span>{bpm} BPM</span>
	<button on:mousedown={() => updateBPM(true)} on:mouseup={onMouseUp}><PlusIcon /></button>
</div>

<style>
	div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	button {
		height: 100%;
		aspect-ratio: 1/1;
		border-radius: 50%;
	}

	span {
		color: #fff;
		display: block;
		white-space: nowrap;
	}
</style>
