import type { Metadata } from 'next';

import Footer from '@/components/Layout/Footer';
import Navigation from '@/components/Layout/Navigation';
import { siteUrl } from '@/fixtures/constants';
import {
  seoDescription,
  seoFavoriteIcon,
  seoKeywords,
  seoSocialPreviewImage,
  seoTitle,
} from '@/fixtures/seo';
import '@/styles/globals.scss';

type Props = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <Navigation />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  keywords: seoKeywords,
  verification: {
    google: 'anUx-kzr2yTpxeAk15NqqJayQDa-wB1oki6YzVx85IE',
  },
  alternates: {
    types: {
      'application/rss+xml': [
        {
          title: "Subscribe to Billy Huang's Blog RSS feed",
          url: `${siteUrl}/rss.xml`,
        },
      ],
    },
  },
  icons: {
    shortcut: seoFavoriteIcon,
    icon: seoFavoriteIcon,
    apple: seoFavoriteIcon,
    other: {
      rel: 'bookmark',
      url: seoFavoriteIcon,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: seoTitle,
    description: seoDescription,
    images: [seoSocialPreviewImage],
  },
  twitter: {
    card: 'summary_large_image',
    // @ts-ignore
    url: siteUrl,
    title: seoTitle,
    description: seoDescription,
    image: seoSocialPreviewImage,
  },
};

export default RootLayout;
