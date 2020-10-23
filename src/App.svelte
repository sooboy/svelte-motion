<script lang="ts">
	import { SomeA,B } from "./some";
	import { onMount } from 'svelte'

	let ref:HTMLElement ;
	// import sync from "framesync";
	// import { animate } from "popmotion";

	// animate({
	// 	from: 0,
	// 	to: 100,
	// 	onUpdate: (latest) => console.log(latest),
	// });
	SomeA();
	SomeA();
  
	let onClick = ()=>{
		 B(ref)
	}

	export let name: string;
</script>

<style lang="scss">
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		h1 {
			color: rosybrown;
			text-transform: uppercase;
			font-size: 4em;
			font-weight: 100;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	div {
		width: 100px;
		height: 100px;
		background-color: red;
	}
</style>

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>

	<div bind:this={ref} on:click={onClick} />
</main>
