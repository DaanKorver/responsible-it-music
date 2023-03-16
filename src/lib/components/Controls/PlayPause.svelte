<script lang="ts">
	import { sampler } from '$lib/state/audio';
	import * as Tone from 'tone';

	import PlayIcon from '$lib/icons/play.svg?component';
	import PauseIcon from '$lib/icons/pause.svg?component';

	let isPlaying = false;
	async function playpause() {
		if (!isPlaying) {
			await Tone.start();
			Tone.Transport.start();
			$sampler.start();
		} else {
			Tone.Transport.stop();
			$sampler.stop();
		}
		isPlaying = !isPlaying;
	}
</script>

<button on:click={playpause}>
	{#if isPlaying}
		<PauseIcon />
	{:else}
		<PlayIcon />
	{/if}
</button>

<style>
	button {
		padding: 0.5rem;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
		background-color: var(--primary);
	}
</style>
