'use client';

import { useSearchParams } from 'next/navigation';

import PaginationComponent from '@/components/Pagination';
import PostGrid from '@/components/post-elements/PostGrid';
import type { Pagination } from '@/models/pagination';
import type { Post } from '@/models/post';

type Props = {
  posts: Post[];
};

const defaultLimit = 10;

const AllPosts = ({ posts }: Props) => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || defaultLimit;
  const query: Pagination = {
    count: posts.length,
    last: Math.ceil(posts.length / limit),
    page,
    limit,
    links: '',
  };

  const pagePosts = posts.slice((page - 1) * limit, page * limit);

  return (
    <section className='all-posts'>
      <h1>All Posts</h1>
      <PostGrid posts={pagePosts} />
      <PaginationComponent pagination={query} />
    </section>
  );
};

export default AllPosts;
