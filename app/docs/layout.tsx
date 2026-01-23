import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { Zap } from 'lucide-react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-500" />
            <span className="font-bold">ZAP Protocol</span>
          </div>
        ),
        url: '/',
      }}
      links={[
        {
          text: 'GitHub',
          url: 'https://github.com/zap-protocol',
          external: true,
        },
      ]}
      sidebar={{
        defaultOpenLevel: 1,
      }}
    >
      {children}
    </DocsLayout>
  );
}
