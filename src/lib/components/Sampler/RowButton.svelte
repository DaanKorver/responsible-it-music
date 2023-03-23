<script lang="ts">
	import { audio } from '$lib/state/notes';

	export let rowIndex: number;
	export let index: number;

	$: active = $audio.notes[rowIndex][index].note !== '';

	let hasNote = false;
	function onClick() {
		const note = `A${rowIndex + 1}`;
		audio.updateNote(rowIndex, index, !hasNote ? note : '');
		hasNote = !hasNote;
	}
</script>

<button on:click={onClick} class:active>{index + 1}</button>

<style>
	button {
		width: 3rem;
		height: 3rem;
		border: 1px solid transparent;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: #333;
		cursor: pointer;
		transition: border-color 0.25s, background-color 0.25s;
		color: #fff;
		margin-right: 0.5rem;
		border-radius: 50%;
	}

	button:hover {
		border-color: var(--primary);
	}
	button:focus,
	button:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}

	button.active {
		background-color: var(--primary);
	}

	button:nth-child(4n) {
		margin-right: var(--bar-gap);
	}
</style>
