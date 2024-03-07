import type { NextPage } from 'next';

import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/post-elements/FeaturedPosts';
import { getFeaturedPosts } from '@/helpers/post';

const HomePage: NextPage = async () => {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
};

export default HomePage;
