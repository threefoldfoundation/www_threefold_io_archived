<script>
  export let partner = {};
  import Stars from "./Stars.svelte";
</script>

<style>
  .card {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0);
    margin-bottom: 20px;
    min-height: 360.69px;
  }
  .card-body {
    padding: 20px;
    max-width: 100%;
    margin: auto;
  }

  .card-body p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .img-thumbnail {
    padding: 1.5rem;
    border: none;
  }
</style>

<div class="col-sm-4">
  <div class="card">
    <img
      src="/partners/{partner.logo}"
      class="img-thumbnail card-img-top"
      alt={partner.name} />
    <div class="card-body">

      <p class="card-text text-left">{partner.description}</p>
      <a href={partner.url} target="_blank" class="btn btn-primary">
        Learn more
      </a>
    </div>
  </div>
</div>
