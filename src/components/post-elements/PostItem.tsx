import Link from 'next/link';

import type { Post } from '@/models/post';

type Props = Post;

const PostItem = ({ title, excerpt, date, slug }: Props) => {
  const formatDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className='post-item'>
      <Link href={`/posts/${slug}`}>
        <article className='post-item__content'>
          <h3>{title}</h3>
          <time>{formatDate}</time>
          <p>{excerpt}</p>
        </article>
      </Link>
    </li>
  );
};

export default PostItem;
