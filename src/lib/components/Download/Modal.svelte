<script lang="ts">
	import { isRecording, isRecordingModal } from '$lib/state/recording';
	import Spinner from '../Loaders/Spinner.svelte';
	import WaitingStates from './WaitingStates.svelte';

	export let isOpen: boolean = false;
</script>

{#if isOpen}
	<div class="background">
		<div class="modal">
			<h2>Recording loop</h2>
			{#if $isRecording}
				<p>Please wait wile we record the loop for you</p>
				<WaitingStates />
				<Spinner />
			{:else}
				<p>That beat sounded great!</p>
				<button on:click={() => isRecordingModal.set(false)}>Lets make some more</button>
			{/if}
		</div>
	</div>
{/if}

<style>
	.background {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.6);
		backdrop-filter: blur(10px);
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 99;
	}

	.modal {
		background-color: var(--white);
		padding: 1rem;
		display: inline-flex;
		flex-direction: column;
		border-radius: 0.5rem;
		text-align: center;
		justify-content: center;
		align-items: center;
	}

	h2 {
		font-size: 2rem;
		margin: 0;
	}
</style>
