import fs from 'fs';

import RSS from 'rss';

import { siteUrl } from '@/fixtures/constants';
import type { Post } from '@/models/post';

export function generateRSSFeed(allPosts: Post[]) {
  const feedOptions = {
    title: "Billy Huang's Blog",
    description: 'Welcome to this blog posts!',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    image_url: `${siteUrl}/images/avatar.jpg`,
    pubDate: new Date(),
    copyright: `@ ${new Date().getFullYear()} Billy Huang All rights reserved.`,
  };

  const feed = new RSS(feedOptions);

  allPosts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `${siteUrl}/posts/${post.slug}`,
      date: post.date,
    });
  });

  fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
