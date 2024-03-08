/* eslint-disable react/no-unstable-nested-components */
import Image from 'next/image';

import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';

import type { Post } from '@/models/post';

import PostHeader from './PostHeader';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('python', python);

type Props = {
  post: Post;
};

const PostDetail = ({ post }: Props) => {
  const customComponents: Components = {
    p: ({ node, children }) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nodeFirstChild: any = node?.children[0];
      if (nodeFirstChild.tagName === 'img') {
        const image = nodeFirstChild;
        return (
          <article className='post-detail__image'>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </article>
        );
      }

      return <p>{children}</p>;
    },
    code: ({ className, children }) => {
      const language = (className as string).replace('language-', '');
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {children as string}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className='post-detail'>
      <PostHeader {...post} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostDetail;
