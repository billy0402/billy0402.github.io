import Image from 'next/image';

import type { Post } from '@/models/post';

type Props = Pick<Post, 'title' | 'image'>;

const PostHeader = ({ title, image }: Props) => {
  return (
    <header className='post-header'>
      <h1>{title}</h1>
      <Image
        src={`/images/posts/${image}`}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  );
};

export default PostHeader;
