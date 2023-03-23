<script>
	import { isRecording, isRecordingModal } from '$lib/state/recording';
	import { record } from '$lib/utils/record';
	import Modal from './Modal.svelte';

	function onClick() {
		isRecording.set(true);
		isRecordingModal.set(true);
		record();
	}
</script>

<button on:click={onClick}>Download</button>

<Modal isOpen={$isRecordingModal} />

<style>
	button {
		padding: 0 2rem;
		height: 3rem;
		top: 2rem;
		left: 2rem;
		border-radius: 10rem;
		font-size: 1rem;
		cursor: pointer;
	}
</style>
