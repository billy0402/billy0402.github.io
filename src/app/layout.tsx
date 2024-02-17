import type { Metadata } from 'next';

import Footer from '@/components/Layout/Footer';
import Navigation from '@/components/Layout/Navigation';
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
  title: 'Billy Huang',
  description: 'A software engineer from Taiwan.',
};

export default RootLayout;
