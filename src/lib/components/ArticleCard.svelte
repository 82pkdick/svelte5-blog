<script lang="ts">
  import type { ArticleMeta } from "$lib/types/blog";
  import { resolve } from "$app/paths";

  let { article }: { article: ArticleMeta } = $props();

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // resolveを使用して記事URLを解決
  const articleUrl = $derived(resolve(`/blog/${article.slug}`));
</script>

<article class="card">
  <a href={articleUrl} class="card-link">
    <h2>{article.title}</h2>
    <p class="description">{article.description}</p>
    <div class="meta">
      <time datetime={article.date}>{formatDate(article.date)}</time>
      <span class="author">by {article.author}</span>
      <span class="read-time">{article.readTime}分で読める</span>
    </div>
    <div class="tags">
      {#each article.tags as tag}
        <span class="tag">{tag}</span>
      {/each}
    </div>
  </a>
</article>

<style>
  .card {
    background: var(--color-bg-secondary);
    border-radius: 8px;
    padding: 1.5rem;
    transition:
      transform 0.2s,
      box-shadow 0.2s;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card-link {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  h2 {
    margin: 0 0 0.5rem;
    color: var(--color-text);
  }

  .description {
    color: var(--color-text-secondary);
    margin: 0.5rem 0 1rem;
    line-height: 1.6;
  }

  .meta {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: var(--color-text-muted);
    margin-bottom: 0.5rem;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    background: var(--color-primary-light);
    color: var(--color-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.875rem;
  }
</style>
