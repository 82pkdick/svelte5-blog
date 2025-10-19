<script lang="ts">
  import type { PageData } from "./$types";
  import { marked } from "marked";
  import { resolve } from "$app/paths";

  let { data }: { data: PageData } = $props();

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Markdownをレンダリング（実際はより安全な処理が必要）
  let htmlContent = $derived(marked(data.article.content));
</script>

<article class="article">
  <header>
    <h1>{data.article.title}</h1>
    <div class="meta">
      <time datetime={data.article.date}>{formatDate(data.article.date)}</time>
      <span>by {data.article.author}</span>
      <span>{data.article.readTime}分で読める</span>
    </div>
    <div class="tags">
      {#each data.article.tags as tag}
        <a href="{resolve('/blog')}?tag={tag}" class="tag">{tag}</a>
      {/each}
    </div>
  </header>

  <div class="content">
    {@html htmlContent}
  </div>

  <footer>
    <a href={resolve("/blog")}>← ブログ一覧に戻る</a>
  </footer>
</article>

<style>
  .article {
    max-width: 800px;
    margin: 0 auto;
  }

  header {
    margin-bottom: 2rem;
  }

  h1 {
    margin: 0 0 1rem;
    font-size: 2.5rem;
    line-height: 1.2;
  }

  .meta {
    display: flex;
    gap: 1rem;
    color: var(--color-text-muted);
    margin-bottom: 1rem;
  }

  .tags {
    display: flex;
    gap: 0.5rem;
  }

  .tag {
    background: var(--color-primary-light);
    color: var(--color-primary);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    text-decoration: none;
    font-size: 0.875rem;
  }

  /* .cover-image {
    width: 100%;
    border-radius: 8px;
    margin: 2rem 0;
  } */

  .content {
    font-size: 1.125rem;
    line-height: 1.75;
  }

  .content :global(h2) {
    margin: 2rem 0 1rem;
  }

  .content :global(h3) {
    margin: 1.5rem 0 0.75rem;
  }

  .content :global(pre) {
    background: var(--color-bg-secondary);
    padding: 1rem;
    border-radius: 4px;
    overflow-x: auto;
  }

  footer {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 1px solid var(--color-border);
  }
</style>
