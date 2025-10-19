<script lang="ts">
  import { page } from "$app/state";

  let status = $derived(page.status);
  let message = $derived(page.error?.message || "ページが見つかりませんでした");
</script>

<div class="error-page">
  <h1>{status}</h1>
  <p>{message}</p>
  <a href="/">ホームへ戻る</a>
</div>

<style>
  .error-page {
    text-align: center;
    padding: 4rem 0;
  }

  h1 {
    font-size: 4rem;
    margin: 0;
    color: var(--color-primary);
  }

  p {
    color: var(--color-text-secondary);
    margin: 1rem 0;
  }

  a {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.75rem 2rem;
    background: var(--color-primary);
    color: white;
    text-decoration: none;
    border-radius: 4px;
  }
</style>
