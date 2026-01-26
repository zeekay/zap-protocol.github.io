import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from '@hanzo/docs-radix-ui/mdx';
import { Tab, Tabs } from '@hanzo/docs-radix-ui/components/tabs';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    ...components,
  };
}

export { Tab, Tabs };
