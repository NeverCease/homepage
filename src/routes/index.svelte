<script>
  // store
  import { showNavigation } from "~store";

  // helper
  showNavigation.update(bool => false);
</script>

<style type="text/scss">
  @import "@inc/uchu/src/scss/components/variables";
  @import "@inc/uchu/src/scss/components/mixins";

  :global(main.homepage) {
    min-height: 700px;

    @media (min-width: 801px) {
      @include center;

      section {
        @include center;
        height: calc(100vh - 11rem - 35px);

        &::after {
          width: 100%; height: 100%;
          top: 0; left: 0;

          background-image: url("/!NC.svg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          content: "";
          opacity: 0.7;
          position: absolute;
          z-index: -1;
        }
      }

      p {
        font-size: 2.5rem;
        line-height: 1.5;
      }
    }

    @media (max-width: 800px) {
      p {
        font-size: 1.5rem;
        line-height: 1.5;
      }
    }
  }
</style>

<svelte:head>
  <title>Ideas Never Cease ∙ Helping to make the 'Net a better place to be</title>
  <meta name="description" content="Ideas Never Cease (!NC) is a one-man shop for all things neat and Internet. Run by Paul Anthony Webb, it began as a company to house his ideas."/>
  <meta property="og:description" content="Ideas Never Cease (!NC) is a one-man shop for all things neat and Internet. Run by Paul Anthony Webb, it began as a company to house his ideas."/>
  <meta property="og:site_name" content="Ideas Never Cease"/>
  <meta property="og:title" content="Ideas Never Cease ∙ Helping to make the 'Net a better place to be"/>
</svelte:head>

<section class="inner-wrap">
  <p><strong>Ideas Never Cease</strong>, a company name and a universal truth. Ideas encompass our lives and everything we do. Why think "outside of the box" when you can <strong>think outside of the sphere</strong> that contains this box? Our mission is simple: to <strong>delight</strong>, <strong>inform</strong>, and <strong>change the world</strong>. And then, <strong>other worlds</strong>. 😁</p>
</section>
