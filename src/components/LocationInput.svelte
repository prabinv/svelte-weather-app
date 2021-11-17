<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  let zipCode = '';

  let search = (event) => {
    if (event.keyCode === 13) {
      dispatch('zipCodeEntered', zipCode);
    }
  }
</script>

<div class="search-box">
  <input
    type="text"
    class="search-bar"
    placeholder="Zipcode..."
    bind:value={zipCode}
    on:keypress={search}
  />
</div>

<style>

.search-box {
  width: 100%;
  margin: 0 0 75px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;

  appearance: none;
  background: none;
  border: none;
  outline: none;

  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  margin-top: -25px;

  box-shadow: 0px 5px rgba(0, 0, 0, 0.2);

  color: #313131;
  font-size: 20px;

  transition: 0.4s ease;
}

.search-box .search-bar:focus {
  background-color: rgba(255, 255, 255, 0.75);
}
</style>
