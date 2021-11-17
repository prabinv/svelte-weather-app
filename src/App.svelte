<script>
	import Header from './components/Header.svelte';

	let zipCode;

	$: console.log(zipCode);

	function search(event) {
		if (event.keyCode === 13) {
			console.log(zipCode + ' search');
		}
	}
</script>

<div>
	<Header />
	<main>
		<div>The app goes here</div>
		<input type="text" placeholder="Zip Code" bind:value={zipCode} on:keypress={search}/>
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
