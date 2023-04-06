<script lang="ts">
	import { audio } from '$lib/state/notes';
	import ControlRow from '../Controls/ControlRow.svelte';
	import Indicators from './Indicators.svelte';
	import Row from './Row.svelte';

	import PlusIcon from '$lib/icons/plus.svg?component';
</script>

<div class="sampler">
	<ControlRow />
	<div>
		<Indicators />
		{#each $audio.rows as _, index}
			<Row {index} />
		{/each}
	</div>
	<button on:click={() => audio.addRow()}><PlusIcon /></button>
</div>

<style>
	.sampler {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
	}

	.sampler > div {
		display: grid;
		grid-template-columns: auto 1fr auto;
		row-gap: 2rem;
		column-gap: 1rem;
		place-items: center;
		margin-bottom: 2rem;
	}

	button {
		display: block;
		margin: 0 auto;
		border-radius: 50%;
		width: 4rem;
		height: 4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
