<script lang="ts">
  import type { PageData } from "./$types";
  import ArticleCard from "$lib/components/ArticleCard.svelte";

  let { data }: { data: PageData } = $props();
</script>

<div class="blog-list">
  <h1>ブログ記事</h1>

  <div class="articles">
    {#each data.articles as article}
      <ArticleCard {article} />
    {/each}
  </div>

  {#if data.articles.length === 0}
    <p class="no-articles">記事が見つかりませんでした。</p>
  {/if}
</div>

<style>
  .blog-list h1 {
    margin-bottom: 2rem;
  }

  /* .filter-info {
    background: var(--color-primary-light);
    color: var(--color-primary);
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin-bottom: 2rem;
  } */

  .articles {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .no-articles {
    text-align: center;
    color: var(--color-text-secondary);
    padding: 4rem 0;
  }
</style>
