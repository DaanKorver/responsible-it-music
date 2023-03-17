<script lang="ts">
	export let sent = false;

	let disabled = false;
	let feedbackText: string;

	async function feedback() {
		if (!feedbackText) return;
		disabled = true;
		const response = await fetch('/api/feedback', {
			method: 'POST',
			body: JSON.stringify({
				body: feedbackText
			})
		});
		// TODO: Handle errors and stuff
		const json = await response.json();
		sent = true;
	}

	$: text = !disabled ? 'Verstuur' : 'Aan het versturen...';
</script>

<form on:submit|preventDefault={feedback}>
	<h2>Laat hier feedback achter</h2>
	<textarea bind:value={feedbackText} rows="12" cols="50" />
	<button type="submit" {disabled}>{text}</button>
</form>

<style>
	button:disabled {
		cursor: not-allowed;
		background-color: #888;
		color: #ccc;
	}

	button {
		background-color: #000;
		color: #fff;
		padding: 0.5rem 1rem;
		font-size: 1rem;
	}

	form {
		padding: 1rem;
		background-color: var(--primary);
		position: fixed;
		display: flex;
		bottom: 5rem;
		left: 1rem;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		color: white;
		gap: 1rem;
	}

	textarea {
		resize: none;
	}
</style>
