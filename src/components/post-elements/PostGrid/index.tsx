import type { Post } from '@/models/post';

import PostItem from './PostItem';

type Props = {
  posts: Post[];
};

const PostGrid = ({ posts }: Props) => {
  if (!posts.length) {
    return <h3 className='text-center '>No posts found</h3>;
  }

  return (
    <ul className='post-grid'>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </ul>
  );
};

export default PostGrid;
