<script>
  import Nav from "./components/Nav.svelte";
  import Router from "svelte-spa-router";
  import routes from "./routes";
</script>

<div>
  <Nav />
</div>

<div class="dynamic-sec">
  <!--[Container]-->
  <div class="container my-5">
    <div class="row">
      <Router {routes} />
    </div>
  </div>
</div>
