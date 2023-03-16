<script lang="ts">
	export let index: number;
	import { audio } from '$lib/state/notes';
	import RowButton from './RowButton.svelte';

	import TrashIcon from '$lib/icons/trash.svg?component';
</script>

<div>
	{#each $audio.notes[index] as _, noteIndex}
		<RowButton rowIndex={index} index={noteIndex} />
	{/each}
	<button on:click={() => audio.removeRow(index)}><TrashIcon /></button>
</div>

<style>
	div {
		display: flex;
		margin-bottom: 3rem;
	}

	button {
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
