import Image from 'next/image';
import Link from 'next/link';

import type { Post } from '@/models/post';

type Props = Post;

const PostItem = ({ title, excerpt, image, date, slug }: Props) => {
  const formatDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className='post-item'>
      <Link href={`/posts/${slug}`}>
        <article className='image-container' style={{ aspectRatio: '16 / 9' }}>
          <Image src={`/images/posts/${image}`} alt={title} fill />
        </article>
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
