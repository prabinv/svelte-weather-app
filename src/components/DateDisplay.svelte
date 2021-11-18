<script>
  import { dateBuilder } from '../utils/dateFns.svelte';
</script>

<div class="date">{dateBuilder(new Date())}</div>

<style>
  .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
    text-shadow: 2px 2px rgba(50, 50, 70, 0.5);
  }
</style>
