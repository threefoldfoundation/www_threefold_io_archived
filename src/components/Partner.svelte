<script>
  export let partner = {};
  import Stars from "./Stars.svelte";
</script>

<style>
  .image {
    min-height: 140px;
    vertical-align: middle;
    text-align: left;
  }
  p {
    min-height: 199px;
  }
</style>

<div class="col-sm-4 item my-5">
  <div class="image">
    <img
      class="img-fluid"
      src="/partners_data/{partner.logo}"
      alt={partner.name} />
  </div>
  <Stars count={partner.stars} />
  <div class="desc mt-2">
    <p class="fs-15 lh-1-2 text-secondary text-left my-5">
      {partner.description}
    </p>
    <a
      href={partner.url}
      class="button btn btn-secondary text-white fw-4 px-3"
      target="_blank">
      {partner.name}
    </a>
  </div>
</div>
