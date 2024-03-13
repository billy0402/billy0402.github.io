import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import type { Post, PostTag } from '@/models/post';

const postDirectory = path.join(process.cwd(), 'src/fixtures/posts');

export function getPostFileNames() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(fileNameOrSlug: string) {
  // remove the filename extension
  const postSlug = fileNameOrSlug.replace(/\.md$/, '');

  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData: Post = {
    ...(data as PostTag),
    content,
    slug: postSlug,
    id: Math.random().toString(),
  };

  return postData;
}

export function getAllPosts() {
  const postFileNames = getPostFileNames();
  const allPosts = postFileNames.map((postFileName) =>
    getPostData(postFileName),
  );
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );
  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured).slice(0, 3);
  return featuredPosts;
}
