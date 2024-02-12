import { Inter } from 'next/font/google';
import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Goldener Reiter',
  description: 'You&apos;ll never ride alone'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
