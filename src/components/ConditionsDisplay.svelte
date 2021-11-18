<script>
  export let weather
</script>

<div class="weather">{weather.weather[0].main}</div>

<style>
  .weather {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  }
</style>
