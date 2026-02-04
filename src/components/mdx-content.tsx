import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';

const components = {
  h1: (props: any) => (
    <h1 {...props} className="text-3xl font-bold tracking-tight mt-8 mb-4" />
  ),
  h2: (props: any) => (
    <h2 {...props} className="text-2xl font-semibold tracking-tight mt-8 mb-4" />
  ),
  p: (props: any) => (
    <p {...props} className="leading-7 [&:not(:first-child)]:mt-6" />
  ),
  // Add more custom components as needed
};

const options = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: true,
        },
      ],
    ],
  },
};

export function MDXContent({ source }: { source: string }) {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      {/* @ts-ignore -- typescript sometimes struggles with the types of plugins */}
      <MDXRemote source={source} components={components} options={options} />
    </article>
  );
}
