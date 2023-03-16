<script lang="ts">
	import BpmButton from './BpmButton.svelte';
	import PlayPause from './PlayPause.svelte';
</script>

<div>
	<PlayPause />
	<BpmButton />
</div>

<style>
	div {
		display: flex;
		align-items: stretch;
		gap: 1rem;
	}
</style>
