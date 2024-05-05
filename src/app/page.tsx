import type { NextPage } from 'next';

import Hero from '@/components/Hero';
import LatestPosts from '@/components/post-elements/LatestPosts';
import { getLatestPosts } from '@/helpers/post';

const HomePage: NextPage = async () => {
  const latestPosts = getLatestPosts();

  return (
    <>
      <Hero />
      <LatestPosts posts={latestPosts} />
    </>
  );
};

export default HomePage;
