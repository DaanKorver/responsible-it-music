<script>
	import { onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	export let interval = 2000;

	const states = ['Preparing', 'Recording', 'Listening', 'Generating'];
	let index = 0;

	const timer = setInterval(() => {
		if (index + 1 > states.length - 1) {
			index = 0;
		} else {
			index++;
		}
	}, interval);

	onDestroy(() => {
		clearInterval(timer);
	});
</script>

<div>
	{#key index}
		<p in:fly={{ y: -15 }} out:fly={{ y: 15 }}>{states[index]}</p>
	{/key}
</div>

<style>
	div {
		position: relative;
		width: 3rem;
		height: 1rem;
		text-align: center;
		margin-bottom: 2rem;
	}
	p {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		margin: 0;
		font-weight: bold;
	}
</style>
