<script lang="ts">
	import { audio } from '$lib/state/notes';

	export let rowIndex: number;
	export let index: number;

	$: active = $audio.rows[rowIndex].notes[index].note !== '';

	let hasNote = false;
	function onClick() {
		const note = `A${rowIndex + 1}`;
		audio.updateNote(rowIndex, index, !hasNote ? note : '');
		hasNote = !hasNote;
	}
</script>

<button class="note" on:click={onClick} class:active>{index + 1}</button>

<style>
	.note {
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
		border-radius: 50%;
	}

	.note:hover {
		border-color: var(--primary);
	}
	.note:focus,
	.note:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}

	.note.active {
		background-color: var(--primary);
	}

	.note:nth-child(4n):not(:last-child) {
		margin-right: var(--bar-gap);
	}
</style>
