<script>
  export let city;
  export let country;
</script>

<div class="location-box">
  <div class="location">
    {city}, {country}
  </div>
</div>

<style>
  .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 3px 3px rgba(50, 50, 70, 0.5);
  }
</style>
