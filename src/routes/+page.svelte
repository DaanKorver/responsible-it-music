<script lang="ts">
	import FeedbackButton from '$lib/components/Feedback/FeedbackButton.svelte';
	import Sampler from '$lib/components/Sampler/Sampler.svelte';
</script>

<FeedbackButton />
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
