<script lang="ts">
	import { audio } from '$lib/state/notes';

	export let rowIndex: number;

	let pitch = 0;

	const MIN_PITCH = -12;
	const MAX_PITCH = 12;

	function setNewPitch(increment = false) {
		// console.log(pitch - 1 < MIN_PITCH);
		// console.log(pitch + 1 > MAX_PITCH);

		if (!increment && pitch - 1 < MIN_PITCH) return;
		if (increment && pitch + 1 > MAX_PITCH) return;

		pitch = increment ? pitch + 1 : pitch - 1;
		audio.updatePitch(rowIndex, pitch);
	}
</script>

<div>
	<p class="pitch">Pitch</p>
	<div>
		<button on:click={() => setNewPitch()}>-</button>
		<p>{pitch}</p>
		<button on:click={() => setNewPitch(true)}>+</button>
	</div>
</div>

<style>
	div {
		text-align: center;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1rem;
	}

	div > div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	p {
		color: white;
		font-size: 1rem;
		margin: 0;
	}

	button {
		border-radius: 50%;
		width: 2rem;
		height: 2rem;
	}
</style>
