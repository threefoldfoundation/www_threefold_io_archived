<script>
  import { onMount } from "svelte";
  import { api } from "./api.js";
  import Partner from "./Partner.svelte";
  import Spinner from "./Spinner.svelte";

  export let partners = [];
  onMount(() => {
    api.getPartners().then(resp => {
      partners = resp.data;
    });
  });
</script>

<div class="mx-auto">
  <h1>Partners</h1>
  <p class="text-secondary text-center">
    We are grateful for our partners, who help to drive and grow the ThreeFold
    Network.
  </p>
</div>

<div />

<div class="row">
  {#each partners as partner}
    <Partner {partner} />
  {:else}
    <Spinner />
  {/each}
</div>
