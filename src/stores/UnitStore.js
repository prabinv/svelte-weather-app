import { writable } from 'svelte/store';

export const Unit = {
  imperial: "imperial",
  metric: "metric"
};


export const UnitStore = writable({
  unit: Unit.imperial
});
