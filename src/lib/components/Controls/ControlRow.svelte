<script lang="ts">
	import Download from '../Download/Download.svelte';
	import BpmButton from './BpmButton.svelte';
	import PlayPause from './PlayPause.svelte';
</script>

<div>
	<PlayPause />
	<BpmButton />
	<Download />
</div>

<style>
	div {
		display: flex;
		align-items: stretch;
		gap: 1rem;
	}
</style>
