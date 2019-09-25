<script>
  // store
  import { showNavigation } from "~store";

  // util
  import { projects } from "~util";

  // helpers
  showNavigation.update(bool => false);

  function createLink(suppliedData) {
    if (suppliedData.url.length > 0) {
      return `
        <a href="${suppliedData.url}" rel="noopener noreferrer" target="_blank" title="${suppliedData.urlTitle}">
          ${suppliedData.url.replace("https://", "")}
        </a>
      `
    } else {
      return "&mdash;";
    }
  }
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  .grid {
    font-family: Karla;

    &:first-of-type {
      background-color: $inc-gray-1;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.2rem;
      text-transform: uppercase;
    }

    &:not(:first-of-type) {
      font-size: 1rem;

      @media (min-width: 801px) {
        border-left: 1px solid $inc-gray-1;
      }

      @media (max-width: 800px) {
        .col {
          border-left-style: solid;
          border-left-width: 1px;

          &:first-of-type {
            border-top-style: solid;
            border-top-width: 1px;
          }

          &:last-of-type {
            border-right-style: solid;
            border-right-width: 1px;
          }
        }
      }

      .col {
        border-right-style: solid;
        border-bottom-style: solid;
        border-right-width: 1px;
        border-bottom-width: 1px;
        border-color: $inc-gray-1;
      }
    }
  }

  .col {
    padding: 0.5rem 1rem;
    cursor: default;
    overflow: hidden;
    vertical-align: middle;

    &.active {
      color: $inc-pink-4;
    }

    &.ideation {
      color: $inc-cyan-4;
    }

    &.progressing {
      color: $inc-orange-4;
    }

    &.paused {
      color: $inc-gray-4;
    }

    &.truncate {
      @include ellipsis;
    }

    :global(a) {
      font-weight: 600;
      white-space: nowrap;
    }
  }

  @media (min-width: 801px) {
    .grid {
      width: 100%;
      display: table;
      table-layout: fixed;
    }

    .col {
      display: table-cell;
    }
  }

  @media (max-width: 800px) {
    .grid {
      &:first-of-type {
        display: none;
      }

      &:not(:first-of-type) {
        margin-bottom: 2rem;
      }
    }
  }

  .table {
    margin-bottom: 2rem;
  }
</style>

<svelte:head>
	<title>Projects ∙ Ideas Never Cease</title>
  <meta name="description" content="Ideas Never Cease (!NC) has a lot of work to do."/>
  <meta property="og:description" content="Ideas Never Cease (!NC) has a lot of work to do."/>
  <meta property="og:site_name" content="Ideas Never Cease"/>
  <meta property="og:title" content="Projects ∙ Ideas Never Cease"/>
</svelte:head>

<section class="table inner-wrap">
  <div class="grid">
    <div class="col">Project Name</div>
    <div class="col">Description</div>
    <div class="col">URL</div>
    <div class="col">Status</div>
  </div>

  {#each projects as project(project.id)}
    <div class="grid">
      <div class="col">{project.name}</div>
      <div class="col">{project.description}</div>
      <div class="col truncate">{@html createLink(project)}</div>
      <div class="col {project.status.toLowerCase()}">{project.status}</div>
    </div>
  {/each}
</section>

<section class="inner-wrap">
  <p>There is only so much one person with varied interests can do at one time. So, this list shifts a fair bit.</p>
</section>
