'use client';
import { RootProvider } from '@hanzo/docs-radix-ui/provider/next';
import { type ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{
        defaultTheme: 'dark',
        attribute: 'class',
      }}
    >
      {children}
    </RootProvider>
  );
}
