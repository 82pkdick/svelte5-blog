<script lang="ts">
  import Navigation from "$lib/components/Navigation.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import type { Snippet } from "svelte";

  let { children }: { children?: Snippet } = $props();
</script>

<div class="app">
  <Navigation />

  <main class="main">
    {@render children?.()}
  </main>

  <Footer />
</div>

<style>
  :global(:root) {
    --color-primary: #ff3e00;
    --color-primary-light: #ff3e0020;
    --color-bg: #ffffff;
    --color-bg-secondary: #f5f5f5;
    --color-text: #333333;
    --color-text-secondary: #666666;
    --color-text-muted: #999999;
    --color-border: #e0e0e0;
  }

  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, sans-serif;
    background: var(--color-bg);
    color: var(--color-text);
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .main {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    width: 100%;
  }
</style>
