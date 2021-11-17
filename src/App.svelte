<script>
	import Header from './components/Header.svelte';
	export let name;
</script>

<div>
	<Header />
	<main>
		<div>The app goes here</div>
		<!-- <LocationInput onSearch={handleSearch} />
		<UnitSwitch />
		<WeatherReport weather={weather} /> -->
	</main>
</div>

<style>
	main {
		min-height: 100vh;
		background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.2),
			rgba(0, 0, 0, 0.75)
		);
		padding: 25px;
	}

</style>
