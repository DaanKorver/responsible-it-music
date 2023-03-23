<script lang="ts">
	export let index: number;
	import { audio } from '$lib/state/notes';
	import RowButton from './RowButton.svelte';

	import TrashIcon from '$lib/icons/trash.svg?component';
	import Pitch from '../Controls/Pitch.svelte';
</script>

<div class="before">
	<Pitch rowIndex={index} />
</div>
<div class="row-container">
	<div>
		{#each $audio.rows[index].notes as _, noteIndex}
			<RowButton rowIndex={index} index={noteIndex} />
		{/each}
	</div>
</div>
<div class="after">
	<button on:click={() => audio.removeRow(index)}><TrashIcon /></button>
</div>

<style>
	.row-container {
		display: flex;
		grid-column: 2/3;
	}

	.row-container > div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.before {
		grid-column: 1/2;
	}

	.after {
		grid-column: 3/4;
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
