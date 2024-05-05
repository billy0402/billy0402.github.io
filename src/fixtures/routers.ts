type Router = {
  label: string;
  href: string;
};

export const routers: Router[] = [
  {
    label: 'Posts',
    href: '/posts',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'RSS',
    href: '/rss.xml',
  },
];
