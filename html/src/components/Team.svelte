<script>
  import { onMount } from "svelte";
  import { api } from "./api.js";
  import Spinner from "./Spinner.svelte";

  let coreHtml = "";
  let developersHtml = "";
  let ambassadorsHtml = "";

  onMount(() => {
    TeamWidget.avatarPrefix = "/team_data";
    TeamWidget.setupHandlers();

    // get members with filteration by project and contribution ids
    // - Core Team : pr id: 1 cont id: 1
    // - Developers: pr id: 1 cont id: 6
    // - Ambassadors: pr id: 1 cont id: 2

    // core team
    api.getMembers([1], [1]).then(resp => {
      coreHtml = TeamWidget.render(resp.data, "rank");
    });
    // developers
    api.getMembers([1], [6]).then(resp => {
      developersHtml = TeamWidget.render(resp.data, "random");
    });
    // ambassadors
    api.getMembers([1], [2]).then(resp => {
      ambassadorsHtml = TeamWidget.render(resp.data, "random");
    });
  });
</script>

<div class="container my-5">
  <div class="intro mb-5">
    <h1>THREEFOLD TEAM</h1>
    <p>The heartbeat behind the technology.</p>
  </div>
  <div class="row">
    {#if coreHtml}
      <div class="intro mt-5 mx-auto text-center clearfix">
        <h2>Organization</h2>
        <p class="text-secondary text-center ">
          We are a team of people who are passionate about making the ThreeFold
          vision a reality. We help to promote and grow the ecosystem.
        </p>
      </div>
      {@html coreHtml}
    {:else}
      <Spinner />
    {/if}

    {#if developersHtml}
      <div class="intro mt-5 mx-auto text-center clearfix">
        <h2>Contributors</h2>
        <p class="text-secondary text-center ">
          The team that created the open source technology driving the ThreeFold
          mission.
        </p>
      </div>
      {@html developersHtml}
    {:else}
      <Spinner />
    {/if}

    {#if ambassadorsHtml}
      <div class="intro mt-5 mx-auto text-center clearfix">
        <h2>Ambassadors</h2>
        <p class="text-secondary ">
          Our ambassadors are people who support us on the journey to a better
          world. Each of them believes in the values and mission of ThreeFold.
          They are proud Token Holders and all have a value-added network.
          Together these people serve on our community board driving the
          Foundation forward.
        </p>
      </div>
      {@html ambassadorsHtml}
    {:else}
      <Spinner />
    {/if}

    <p class="text-secondary text-center" />
  </div>
</div>
