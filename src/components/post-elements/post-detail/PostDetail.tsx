/* eslint-disable react/no-unstable-nested-components */
import Image from 'next/image';

import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';

import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
import themeTomorrow from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

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
          <article className='image-container' style={{ height: '300px' }}>
            <Image
              src={
                image.properties.src.startsWith('/')
                  ? `/images/posts/${image.properties.src}`
                  : image.properties.src
              }
              alt={image.properties.alt}
              fill
            />
          </article>
        );
      }

      return <p>{children}</p>;
    },
    code: ({ children, className, node, ...rest }) => {
      const match = /language-(\w+)/.exec(className ?? '');
      const language = match?.[1] ?? '';

      return language ? (
        <SyntaxHighlighter language={language} style={themeTomorrow}>
          {children as string}
        </SyntaxHighlighter>
      ) : (
        <code {...rest} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className='post-detail'>
      <PostHeader {...post} />
      <ReactMarkdown
        remarkPlugins={[[remarkGfm], remarkMath]}
        rehypePlugins={[rehypeKatex]}
        components={customComponents}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostDetail;
