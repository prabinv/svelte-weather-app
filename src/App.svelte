<script>
	import { keys } from './secrets/keys';
	import Card from './components/Card.svelte';
	import Header from './components/Header.svelte';
	import LocationInput from './components/LocationInput.svelte';

	let weather;

	const unit = 'imperial';

	let getWeather = (event) => {
		const { detail: zipCode } = event;

		fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=${unit}&appid=${keys.API_KEY}`)
			.then(response => response.json())
			.then(data => {
				weather = data;
			})
			.catch(error => console.error(error));
	}

	$: isCold = weather && weather.main.temp < 65;
</script>

<div class="app" class:cold={weather && isCold} class:warm={weather && !isCold}>
	<Header />
	<main>
		<!-- <input type="text" placeholder="Zip Code" bind:value={zipCode} on:keypress={search}/> -->
		<LocationInput on:zipCodeEntered={getWeather} />
		<!-- 
		<UnitSwitch />
		<WeatherReport weather={weather} /> -->
		{#if weather}
			<Card>
				<span slot="temp">{Math.round(weather.main.temp)} °F</span>
			</Card>
		{/if}
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

	.app {
		background-size: cover;
		background-position: bottom;
		transition: 0.4 ease;
	}

	.app.warm {
		background-image: url("/assets/warm-bg.jpg");
	}

	.app.cold {
		background-image: url("/assets/cold-bg.jpg");
	}
</style>
