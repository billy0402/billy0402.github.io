import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import Providers from '@/redux/providers';
import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

type Props = Readonly<{
  children: React.ReactNode;
}>;

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export const metadata: Metadata = {
  title: 'Billy Huang',
  description: 'A software engineer from Taiwan.',
};

export default RootLayout;
