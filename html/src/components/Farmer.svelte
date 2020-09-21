<script>
  export let farmer = {};
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
    <img class="img-fluid" src="/farmers/{farmer.logo}" alt={farmer.name} />
  </div>
  <div class="desc mt-2">
    <p class="fs-15 lh-1-2 text-secondary text-left my-5">
      {farmer.description}
    </p>
    <p class="fs-15 lh-1-2 text-secondary text-left my-5">{farmer.contact}</p>
    <a
      href={farmer.url}
      class="button btn btn-primary text-white fw-4 px-3"
      target="_blank">
      {farmer.name}
    </a>
  </div>
</div>
