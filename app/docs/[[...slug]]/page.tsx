import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from '@hanzo/docs-radix-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from '@hanzo/docs-radix-ui/mdx';
import { Tab, Tabs } from '@hanzo/docs-radix-ui/components/tabs';
import type { MDXContent } from 'mdx/types';
import type { TOCItemType } from '@hanzo/docs-core/toc';

interface ExtendedPageData {
  body: MDXContent;
  toc: TOCItemType[];
  full?: boolean;
  title?: string;
  description?: string;
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const data = page.data as ExtendedPageData;
  const MDX = data.body;

  return (
    <DocsPage toc={data.toc} full={data.full}>
      <DocsTitle>{data.title}</DocsTitle>
      <DocsDescription>{data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents, Tab, Tabs }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
