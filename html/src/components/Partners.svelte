<script>
  import { onMount } from "svelte";
  import { api } from "./api.js";
  import Partner from "./Partner.svelte";
  import Spinner from "./Spinner.svelte";

  export let useCases = "";
  export let blockchain = "";
  export let tech = "";
  export let exchange = "";

  document.body.style.backgroundColor = "white";
  const lowestRank = 99999;
  function _sort(dataset, prop, defaultValue) {
    function setDefaultValue(member) {
      // 0 means unset too
      if (!member[prop]) {
        member[prop] = defaultValue;
      }
    }

    useCases = dataset.filter(function(item) {
      return item.sectionID == 1;
    });

    blockchain = dataset.filter(function(item) {
      return item.sectionID == 2;
    });

    tech = dataset.filter(function(item) {
      return item.sectionID == 3;
    });

    exchange = dataset.filter(function(item) {
      return item.sectionID == 4;
    });

    function compare(a, b) {
      setDefaultValue(a);
      setDefaultValue(b);
      const partnerA = a.rank;
      const partnerB = b.rank;

      let comparison = 0;
      if (partnerA > partnerB) {
        comparison = 1;
      } else if (partnerA < partnerB) {
        comparison = -1;
      }
      return comparison;
    }
    useCases.sort(compare);
    blockchain.sort(compare);
    tech.sort(compare);
    exchange.sort(compare);
  }

  onMount(() => {
    api.getPartners().then(resp => {
      // if no rank in toml file will take lowest rank
      _sort(resp.data, "sectionID", lowestRank);
    });
  });
</script>

<div
  class="align-items-center home_page_banner banner_home home_intro"
  style="background-image: url(/assets/partners-logo/partners.png);
  background-position: center center; background-size: cover; background-repeat:
  no-repeat; height: 1050.3px; top: -50px;">
  <div class="desc" id="thingtohide" style="display: block;">
    <div class="container">
      <div class="row" style="padding-top: 10px;">
        <div class="col-md-12 mx-auto">
          <div class="desc">
            <div class="content w-100 text-center">
              <h1 class="1pb-2 mb-3 text-uppercase">
                thank you
                <br />
                partners
              </h1>
              <p class="lead">
                <b>Together we build the new Internet</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  {#if useCases}
    <h3 class="text-uppercase text-center">grid use cases</h3>
    <p>
      Are projects that empower and grow experiences and solutions that positively
      impact our planet and humanity. They leverage the ThreeFold Grid to benefit
      from its autonomous and peer-to-peer technology.
    </p>
    <div class="row">
      <div class="card-group my-5">
        {#each useCases as partner}
          <Partner {partner} />
        {:else}
          <Spinner />
        {/each}
      </div>
    </div>
  {/if}

  {#if blockchain}
    <h3 class="text-uppercase text-center">blockchain partners</h3>
    <p>
      Are projects that empower a decentralised and peer-to-peer digital world.
      They make use of the ThreeFold Grid to scale their blockchain ecosystems
      on a truly decentralised infrastructure.
    </p>
    <div class="row">
      <div class="card-group my-5">
        {#each blockchain as partner}
          <Partner {partner} />
        {:else}
          <Spinner />
        {/each}
      </div>
    </div>
  {/if}

  {#if tech}
    <h3 class="text-uppercase text-center">technology partners</h3>
    <p>
      Are those projects that empower the ThreeFold Grid’s technology characteristics - scalability,
      performance, sustainability and more, with truly efficient infrastructure and energy solutions.
    </p>
    <div class="row">
      <div class="card-group my-5">
        {#each tech as partner}
          <Partner {partner} />
        {:else}
          <Spinner />
        {/each}
      </div>
    </div>
  {/if}

  {#if exchange}
    <h3 class="text-uppercase text-center">exchange partners</h3>
    <p>
      Are platforms where people and organisations can buy ThreeFold Tokens and
      exchange them for other digital currencies (and fiat currencies).
      They empower ThreeFold Token holders with more possibilities
    </p>
    <div class="row">
      <div class="card-group my-5">
        {#each exchange as partner}
          <Partner {partner} />
        {:else}
          <Spinner />
        {/each}
      </div>
    </div>
  {/if}
</div>
