<script lang="ts">
	import FeedbackButton from '$lib/components/Feedback/FeedbackButton.svelte';
	import Modal from '$lib/components/Download/Modal.svelte';
	import Sampler from '$lib/components/Sampler/Sampler.svelte';
	import Download from '$lib/components/Download/Download.svelte';
	import { audio } from '$lib/state/notes';

	$: console.log($audio);
</script>

<!-- <FeedbackButton /> -->
<div>
	<Sampler />
</div>

<style>
	div {
		display: grid;
		place-items: center;
		height: 100svh;
	}
</style>
