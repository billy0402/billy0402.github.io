import { getAllPosts } from '@/helpers/post';
import { generateRSSFeed } from '@/helpers/rss';

export function register() {
  const allPosts = getAllPosts();
  generateRSSFeed(allPosts);
}
