<script>
  import Star from "./Star.svelte";
  export let count = 5;

  $: starsArr = new Array(count);
</script>

<style>
  .stars {
    text-align: left;
  }
</style>

{#if count > 0}
  <div class="stars">
    {#each starsArr as item}
      <Star />
    {/each}
  </div>
{/if}
