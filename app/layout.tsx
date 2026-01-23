import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
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
  description: 'Zero-latency Asynchronous Protocol - High-performance RPC framework with Cap\'n Proto serialization',
  keywords: ['ZAP', 'RPC', 'protocol', 'Cap\'n Proto', 'async', 'distributed systems'],
  authors: [{ name: 'ZAP Protocol' }],
  openGraph: {
    title: 'ZAP Protocol',
    description: 'Zero-latency Asynchronous Protocol - High-performance RPC framework',
    url: 'https://zap-protocol.github.io',
    siteName: 'ZAP Protocol',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZAP Protocol',
    description: 'Zero-latency Asynchronous Protocol - High-performance RPC framework',
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
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            attribute: 'class',
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
