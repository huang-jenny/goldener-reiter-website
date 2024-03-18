import { Inter } from 'next/font/google';
import './globals.scss';
import { Providers } from './providers';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Goldener Reiter',
  description: "You'll never ride alone"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
