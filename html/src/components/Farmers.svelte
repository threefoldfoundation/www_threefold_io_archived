<script>
  import { onMount } from "svelte";
  import { api } from "./api.js";
  import Farmer from "./Farmer.svelte";
  import Spinner from "./Spinner.svelte";

  export let farmers = [];
  onMount(() => {
    api.getFarmers().then(resp => {
      farmers = resp.data;
      console.log(farmers)
    });
  });
</script>

<div class="mx-auto">
  <h1>Farmers</h1>
</div>

<div />

<div class="row">
  {#each farmers as farmer}
    <Farmer {farmer} />
  {:else}
    <Spinner />
  {/each}
</div>
