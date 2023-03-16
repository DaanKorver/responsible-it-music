<script lang="ts">
	import { sampler } from '$lib/state/audio';
	import * as Tone from 'tone';

	import PlayIcon from '$lib/icons/play.svg?component';
	import PauseIcon from '$lib/icons/pause.svg?component';
	import { onblur } from '$lib/actions/onblur';

	let isPlaying = false;
	function stopSampler() {
		Tone.Transport.stop();
		$sampler.stop();
		isPlaying = false;
	}

	async function startSampler() {
		await Tone.start();
		Tone.Transport.start();
		$sampler.start();
		isPlaying = true;
	}

	async function playpause() {
		!isPlaying ? await startSampler() : stopSampler();
	}
</script>

<button on:click={playpause} use:onblur={stopSampler}>
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
		width: 3rem;
		height: 3rem;
	}
</style>
