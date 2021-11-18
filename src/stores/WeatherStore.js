import { writable, derived } from 'svelte/store';

export const Unit = {
  imperial: "imperial",
  metric: "metric"
};

export const WeatherStore = writable({
  unit: Unit.imperial
});

export const WeatherDerivedStore = derived(WeatherStore, $weather => {
  const isMetric = $weather.unit === Unit.metric;
  const isImperial = $weather.unit === Unit.imperial;
  const hasWeather = $weather.weather !== undefined;
  const isCold = hasWeather && ((isMetric && $weather.weather.temp < 15) || (isImperial && $weather.weather.temp < 65));
  const unitDisplay = $WeatherStore.unit === Unit.imperial ? '°F' : '°C';
  return {
    isMetric,
    isImperial,
    hasWeather,
    isCold,
    unitDisplay
  };
}
