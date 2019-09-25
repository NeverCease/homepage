<script>
  // variables
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status} ∙ Ideas Never Cease</title>
</svelte:head>

<section class="inner-wrap">
  <img alt="WTF bro" src="what.png"/>

  <p>{status}: {error.message}</p>

  {#if dev && error.stack}
    <pre>{error.stack}</pre>
  {/if}
</section>
