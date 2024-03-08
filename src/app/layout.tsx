import type { Metadata } from 'next';

import Footer from '@/components/Layout/Footer';
import Navigation from '@/components/Layout/Navigation';
import {
  seoDescription,
  seoFavoriteIcon,
  seoKeywords,
  seoSocialPreviewImage,
  seoTitle,
  seoUrl,
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
        {children}
        <Footer />
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  metadataBase: new URL(seoUrl),
  title: seoTitle,
  description: seoDescription,
  keywords: seoKeywords,
  verification: {
    google: 'anUx-kzr2yTpxeAk15NqqJayQDa-wB1oki6YzVx85IE',
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
    url: seoUrl,
    title: seoTitle,
    description: seoDescription,
    images: [seoSocialPreviewImage],
  },
  twitter: {
    card: 'summary_large_image',
    // @ts-ignore
    url: seoUrl,
    title: seoTitle,
    description: seoDescription,
    image: seoSocialPreviewImage,
  },
};

export default RootLayout;
