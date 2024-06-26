import type { Metadata, NextPage } from 'next';

import AllPosts from '@/components/post-elements/AllPosts';
import { getAllPosts } from '@/helpers/post';

const AllPostsPage: NextPage = () => {
  const allPosts = getAllPosts();

  return <AllPosts posts={allPosts} />;
};

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'A list of all programming-related tutorials and posts!',
};

export default AllPostsPage;
