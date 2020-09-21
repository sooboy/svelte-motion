<script lang="ts">
	import { createChart } from "lightweight-charts";
	import { onMount } from "svelte";

	export let name: string;
	let chartid = `chart-${new Date().getTime()}`;

	onMount(() => {
		const chart = createChart(chartid, { width: 1000, height: 600 });
		const lineSeries = chart.addLineSeries();
		lineSeries.setData([
			{ time: "2019-04-11", value: 80.01 },
			{ time: "2019-04-12", value: 96.63 },
			{ time: "2019-04-13", value: 76.64 },
			{ time: "2019-04-14", value: 81.89 },
			{ time: "2019-04-15", value: 74.43 },
			{ time: "2019-04-16", value: 80.01 },
			{ time: "2019-04-17", value: 96.63 },
			{ time: "2019-04-18", value: 76.64 },
			{ time: "2019-04-19", value: 81.89 },
			{ time: "2019-04-20", value: 74.43 },
		]);
	});
</script>

<style>
	:global(body){
		background-color: black;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	div {
		 width:1000px;
		 margin: 0 auto;
	}
</style>

<main>
	<h1>Hello {name}!</h1>
	<p>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
		how to build Svelte apps.
	</p>
	<div id={chartid} />
</main>
