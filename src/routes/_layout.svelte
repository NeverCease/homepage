<script>
  // import
  import { stores } from "@sapper/app";

  // components
  import Footer from "../components/Footer.svelte";
  import Navigation from "../components/Navigation.svelte";

  // utils
  const { page } = stores();
  export let segment;
  let className;

  $: className = $page.path === "/" ?
    "homepage" :
    ""
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  :global(html),
  :global(body),
  :global(app) {
    width: 100%; height: 100%;
  }

  :global(app) {
    display: block;
  }

  :global(body) {
    min-height: 100vh;

    background-color: $inc-white;
    color: rgba($inc-black, 0.85);
    display: flex;
    flex-direction: column;
    font-family: Karla, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 12px;
  }

  :global(main) {
    flex: 1;
    padding-top: 8rem;
    padding-bottom: 3rem;
    width: 100%;

    section {
      position: relative;
    }
  }

  :global(.inner-wrap) {
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 1060px) {
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }

  :global(figure) {
    background-image: radial-gradient(circle, $inc-cyan-4 0%, $inc-blue-4 100%);
    margin-bottom: 2rem;
    position: relative;

    @media (min-width: 801px) {
      height: 500px;
    }

    @media (max-width: 800px) {
      width: calc(100% + 4rem); height: 250px;
      left: -2rem;
    }

    img {
      width: 100%; height: 100%;

      object-fit: cover;
      object-position: center;
    }
  }

  :global(p),
  :global(ul) {
    @media (min-width: 801px) {
      font-size: 1.3rem;
      line-height: 1.6;
      margin-bottom: 1.3rem;
    }

    @media (max-width: 800px) {
      font-size: 1rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }

  :global(ul) {
    padding-left: 1.3rem;

    li {
      margin-bottom: 1rem;
    }

    a {
      color: $inc-cyan-4;
      font-weight: 600;
    }
  }

  :global(.text-blue) {
    color: $inc-cyan-4;
    cursor: default;
  }
</style>

<Navigation {segment}/>

<main class={className}>
  <slot></slot>
</main>

<Footer/>
