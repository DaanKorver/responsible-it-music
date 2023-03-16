<script lang="ts">
	import { audio } from '$lib/state/notes';
	import ControlRow from '../Controls/ControlRow.svelte';
	import Indicators from './Indicators.svelte';
	import Row from './Row.svelte';

	import PlusIcon from '$lib/icons/plus.svg?component';
</script>

<div>
	<ControlRow />
	<Indicators />
	{#each $audio.notes as _, index}
		<Row {index} />
	{/each}
	<button on:click={() => audio.addRow()}><PlusIcon /></button>
</div>

<style>
	div {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		margin: 0 auto;
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
