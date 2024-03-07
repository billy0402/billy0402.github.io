import PostGrid from '@/components/post-elements/PostGrid';
import type { Post } from '@/models/post';

type Props = {
  posts: Post[];
};

const AllPosts = ({ posts }: Props) => {
  return (
    <section className='all-posts'>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
