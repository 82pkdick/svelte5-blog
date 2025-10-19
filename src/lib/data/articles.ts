import type { Article, ArticleMeta } from "$lib/types/blog";

// モックデータ（実際はAPIやCMSから取得）
const articles: Article[] = [
  {
    slug: 'getting-started-with-sveltekit',
    title: 'SvelteKitで始めるWebアプリ開発',
    description: 'SvelteKitの基本的な使い方と、最初のアプリケーションの作り方を解説します。',
    content: `# SvelteKitで始めるWebアプリ開発\n\n...記事の内容...`,
    date: '2024-01-15',
    author: '山田太郎',
    tags: ['SvelteKit', 'TypeScript', '入門'],
    readTime: 5
  },
  {
    slug: 'svelte5-runes-deep-dive',
    title: 'Svelte 5 Runesシステム完全解説',
    description: '$state、$derived、$effectなど、Svelte 5の新しいリアクティビティシステムを詳しく解説。',
    content: `# Svelte 5 Runesシステム完全解説\n\n...記事の内容...`,
    date: '2024-01-10',
    author: '鈴木花子',
    tags: ['Svelte 5', 'Runes', 'リアクティビティ'],
    readTime: 8
  },
  {
    slug: 'typescript-best-practices',
    title: 'TypeScriptベストプラクティス2024',
    description: 'Svelte/SvelteKitプロジェクトでのTypeScript活用法とベストプラクティス。',
    content: `# TypeScriptベストプラクティス2024\n\n...記事の内容...`,
    date: '2024-01-05',
    author: '佐藤次郎',
    tags: ['TypeScript', 'ベストプラクティス'],
    readTime: 10
  }
];

// 記事一覧を取得（メタデータのみ）
export function getArticles(): ArticleMeta[] {
  return articles
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// 個別記事を取得
export function getArticle(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

// タグで記事を絞り込み
export function getArticlesByTag(tag: string): ArticleMeta[] {
  return getArticles().filter(article => article.tags.includes(tag));
}

// 全タグを取得
export function getAllTags(): string[] {
  const tags = new Set<string>();
  articles.forEach(article => {
    article.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}