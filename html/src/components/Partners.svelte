<script>
  import { onMount } from "svelte";
  import { api } from "./api.js";
  import Partner from "./Partner.svelte";
  import Spinner from "./Spinner.svelte";

  export let useCases;
  export let blockchain;
  export let tech;
  export let exchange;

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

<div class="align-items-center partner_page_banner" style=" min-height: 1050.3px;">
  <div class="container">
    <div class="row">
      <div class="col-md-12 mx-auto">
        <div class="desc">
          <img
            src="/assets/partners-logo/partners_3.png"
            class="img-fluid w-50 mt-5"
            alt="TF Partners" />
          <div class="content w-100 text-center">
            <h2 class="1pb-2 text-uppercase mt-4">thank you partners</h2>
            <p>Welcome to the growing ecosystem around ThreeFold</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-4">
            <img src="/assets/partners-logo/Skale.png" class="mb-3" alt="" />
          </div>
          <div class="col-md-8 text-left">
            <div class="partner-text">
              <p class="text-left mb-4">
                <i>
                  "Not only do we share the mutual goal of a truly decentralized
                  secure, scalable network. SKALE developers will be able use
                  Threefolds peer-to-peer cloud to more easily build highly
                  scalable Ethereum Dapps."
                </i>
              </p>
              <h4 class="text-uppercase">Christine perry</h4>
              <p class="mb-0">VP Solutions Engineering</p>
              <span>SKALE Labs</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-4">
            <img src="/assets/partners-logo/digibyte.png" class="mb-3" alt="" />
          </div>
          <div class="col-md-8 text-left">
            <div class="partner-text">
              <p class="text-left mb-5">
                <i>
                  "Both DigiByte and Threefold have the same mission: creating a
                  truly decentralized world. It’s not just about technology but
                  also about equality and humanity."
                </i>
              </p>
              <h4 class="text-uppercase">Rudy Bouwman</h4>
              <p class="mb-0">Secretary & Vice-Chairman</p>
              <span>DigiByte Foundation</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-4">
            <img
              src="/assets/partners-logo/PRESEARCH.png"
              class="mb-3"
              alt="" />
          </div>
          <div class="col-md-8 text-left">
            <div class="partner-text">
              <p class="text-left mb-4">
                <i>
                  "Threefolds distributed infrastructure offering peer-to-peer
                  storage and compute resources paid with cryptocurrency is
                  exactly what the project needs to fulfil our roadmap and
                  decentralize the platform."
                </i>
              </p>
              <h4 class="text-uppercase">Colin Pape</h4>
              <p class="mb-0">Founder and CEO</p>
              <span>Presearch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="container">
  {#if useCases}
    <h2 class="text-uppercase text-center">grid use cases</h2>
    <p>
      Are projects that empower and grow experiences and solutions that
      positively impact our planet and humanity. They leverage the ThreeFold
      Grid to benefit from its autonomous and peer-to-peer technology.
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
    <h2 class="text-uppercase text-center">blockchain partners</h2>
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
    <h2 class="text-uppercase text-center">technology partners</h2>
    <p>
      Are those projects that empower the ThreeFold Grid’s technology
      characteristics - scalability, performance, sustainability and more, with
      truly efficient infrastructure and energy solutions.
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

</div>
