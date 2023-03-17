<script lang="ts">
	import FeedBackIcon from '$lib/icons/feedback.svg?component';
	import FeedbackForm from './FeedbackForm.svelte';

	let isOpen = false;
	let sent: boolean;

	$: {
		if (sent) {
			isOpen = false;
		}
	}

	$: text = isOpen ? 'Sluit formulier' : 'Open feedback formulier';
</script>

{#if isOpen}
	<FeedbackForm bind:sent />
{/if}

<button on:click={() => (isOpen = !isOpen)}>{text} <FeedBackIcon /></button>

<style>
	button {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		border-radius: 999px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		box-shadow: 2px 2px 20px 0px rgba(255, 255, 255, 0.5);
		transition: 0.1s transform ease-out;
		cursor: pointer;
	}

	button:hover,
	button:focus-visible {
		transform: scale(1.1);
	}
</style>
