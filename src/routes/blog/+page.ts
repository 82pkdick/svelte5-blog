import type { PageLoad } from './$types';
import { getArticles } from '$lib/data/articles';

export const load: PageLoad = async () => {
  const articles = getArticles();

  return {
    articles
  };
};