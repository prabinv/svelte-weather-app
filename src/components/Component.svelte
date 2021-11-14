<!-- Put your javascript in the script block -->
<script>
  // You can put your import statements here.
  import range from 'lodash.range';
  import { fade } from 'svelte/transition'; // build in animations

  // prop -> <Component prop="Hello">
  export let prop;

  // local state
  let localState = "World";
  let numbers = range(4);

  // reactive state - computed values
  $: reactiveState = `${prop} ${localState}`;

  // Funciton to update local state
  function updateLocalState() {
    // Update local state to rerender the UI
    localState = "Svelte";
    
    // make sure to assign the local state, 
    // changing it will not trigger the update.
    // e.g., the following will not trigger the update:
    // numbers.push(range(2));
    numbers = numbers.concat(range(numbers.length, numbers.length + 2));
  }
</script>

<!-- The HTML template (JSX equivalent) goes here -->
<div>
  <h4>{reactiveState}</h4> <!-- Similar to JSX, use curly braces to evaluate the value -->
  <!-- Two way binding for inputs using the bind:value syntax -->
  <input type="text" bind:value={localState} />
  <ul>
    {#each numbers as n} <!-- Special syntax to loop through array like items -->
      <li transition:fade="{{delay: 250, duration: 300}}">{n}</li>
    {/each}
  </ul>
  <!-- Event handlers can be bound to controls using the on:eventName syntax -->
  <!-- You can add modifiers to preventDefault, stopPropagation, fire only once etc. -->
  <button on:click|once={updateLocalState}>Update local state</button>
</div>

<!-- The CSS styles go here, the styles are scoped to the component -->
<style>
  div {
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>
