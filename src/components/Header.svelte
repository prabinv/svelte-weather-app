<script>
  let title = 'Svelte Weather App';

  $: document.title = title;
</script>

<header>
  <h1>{title}</h1>
</header>

<style>
  header {
    padding: 25px;
    background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.2)
    );
  }
</style>
