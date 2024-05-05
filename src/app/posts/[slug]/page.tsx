import type { Metadata, NextPage } from 'next';

import PostDetail from '@/components/post-elements/PostDetail';
import { getPostData, getPostFileNames } from '@/helpers/post';

type Props = {
  params: { slug: string };
};

const PostDetailPage: NextPage<Props> = ({ params }: Props) => {
  const { slug } = params;
  const post = getPostData(slug);

  return <PostDetail post={post} />;
};

export const generateStaticParams = () => {
  const postFileNames = getPostFileNames();
  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = params;
  const post = getPostData(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
};

export default PostDetailPage;
