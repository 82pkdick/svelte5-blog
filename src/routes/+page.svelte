<script lang="ts">
  import { getArticles } from "$lib/data/articles";
  import ArticleCard from "$lib/components/ArticleCard.svelte";
  import { resolve } from "$app/paths";

  // Svelte 5の$derivedを使用して最新記事を取得
  const recentArticles = $derived(getArticles().slice(0, 3));

  // resolveを使用してURLを解決
  const blogUrl = resolve("/blog");
</script>

<div class="home">
  <section class="hero">
    <h1>Welcome to My Blog</h1>
    <p>Svelte 5とSvelteKitで構築された、モダンなブログシステムです。</p>
  </section>

  <section class="recent-posts">
    <h2>最新の記事</h2>
    <div class="article-grid">
      {#each recentArticles as article}
        <ArticleCard {article} />
      {/each}
    </div>
    <a href={blogUrl} class="view-all">すべての記事を見る →</a>
  </section>
</div>

<style>
  .hero {
    text-align: center;
    padding: 4rem 0;
  }

  .hero h1 {
    font-size: 3rem;
    margin: 0 0 1rem;
  }

  .hero p {
    font-size: 1.25rem;
    color: var(--color-text-secondary);
  }

  .recent-posts {
    margin-top: 4rem;
  }

  .article-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .view-all {
    display: inline-block;
    margin-top: 1rem;
    color: var(--color-primary);
    text-decoration: none;
    font-weight: 500;
  }
</style>
