import Link from 'next/link';

import PostGrid from '@/components/post-elements/PostGrid';
import type { Post } from '@/models/post';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className='featured-posts'>
      <h2>Featured Posts</h2>
      <section className='featured-posts__actions'>
        <Link className='btn' href='/posts'>
          &gt;&gt; See all posts
        </Link>
      </section>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
