import './global.css';
import { Provider } from '@/components/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'ZAP Protocol',
    template: '%s | ZAP Protocol',
  },
  description: 'Zero-copy Application Protocol - Built for the age of AI & crypto',
  keywords: ['ZAP', 'RPC', 'protocol', 'Cap\'n Proto', 'AI', 'crypto', 'zero-copy', 'distributed systems'],
  authors: [{ name: 'ZAP Protocol' }],
  openGraph: {
    title: 'ZAP Protocol',
    description: 'Zero-copy Application Protocol - Built for the age of AI & crypto',
    url: 'https://zap-protocol.github.io',
    siteName: 'ZAP Protocol',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZAP Protocol',
    description: 'Zero-copy Application Protocol - Built for the age of AI & crypto',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
