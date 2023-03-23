<script>
	import { record } from '$lib/utils/record';
	import Modal from './Modal.svelte';

	let open = false;

	function onClick() {
		open = true;
	}

	$: {
		if (open) {
			record();
		}
	}
</script>

<button on:click={onClick}>Download</button>

<Modal isOpen={open} />

<style>
	button {
		position: fixed;
		padding: 1rem 2rem;
		top: 2rem;
		left: 2rem;
	}
</style>
