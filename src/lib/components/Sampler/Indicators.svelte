<script lang="ts">
	import { beatIndex } from '$lib/state/audio';
	import { ROW_BUTTONS } from '$lib/state/notes';
</script>

<div>
	{#each Array.from({ length: ROW_BUTTONS }) as indicator, i}
		<span class:active={i === $beatIndex} />
	{/each}
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		grid-column: 2/3;
		gap: 0.5rem;
	}

	span {
		width: 3rem;
		height: 3rem;
		background-color: rgba(255, 255, 255, 0.4);
		display: block;
		border-radius: 50%;
		transform: scale(0.2);
		transition: 0.1s transform ease-out;
	}

	span:nth-child(4n):not(:last-child) {
		margin-right: var(--bar-gap);
	}

	span.active {
		background-color: #fff;
		transform: scale(0.3);
	}
</style>
