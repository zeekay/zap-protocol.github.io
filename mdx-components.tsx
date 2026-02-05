import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from '@hanzo/docs-radix-ui/mdx';
import { Tab, Tabs } from '@hanzo/docs-radix-ui/components/tabs';
import { SchemaTabs } from './components/schema-tabs';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Tab,
    Tabs,
    SchemaTabs,
    ...components,
  };
}

export { Tab, Tabs, SchemaTabs };
