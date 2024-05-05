import Link from 'next/link';

import PostGrid from '@/components/post-elements/PostGrid';
import type { Post } from '@/models/post';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className='post-list'>
      <header className='post-list__header'>
        <h2>Featured Posts</h2>
        <Link className='link' href='/posts'>
          &gt;&gt; See all posts
        </Link>
      </header>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
