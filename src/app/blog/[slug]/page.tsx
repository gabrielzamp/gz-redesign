import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/blog';
import { markdownToHtml } from '@/lib/markdown';
import { extractHeadings } from '@/lib/toc';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { NewsletterCTA } from '@/components/blog/newsletter-cta';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Gabriel Zampieri`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: post.author ? [post.author.name] : ['Gabriel Zampieri'],
      images: post.coverImage ? [post.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const content = await markdownToHtml(post.content);
  const headings = extractHeadings(post.content);

  return (
    <>
      {/* Blue Header */}
      <header className="bg-brand-blue text-white pt-20 pb-24">
         <div className="container max-w-screen-xl mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-blue-200 text-sm font-medium tracking-wide uppercase">
                     <span>{post.category || 'Blog'}</span>
                     <span>•</span>
                     <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(undefined, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </time>
                </div>
                <h1 className="page-title text-white">
                    {post.title}
                </h1>
                <div className="flex items-center justify-center gap-3 pt-4">
                     {post.author?.image && (
                         <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400 relative">
                             <Image 
                                src={post.author.image} 
                                alt={post.author.name} 
                                fill
                                className="object-cover"
                             />
                         </div>
                     )}
                     <div className="text-left leading-tight">
                         <div className="font-semibold text-white">{post.author?.name || 'Gabriel Zampieri'}</div>
                     </div>
                </div>
            </div>
         </div>
      </header>
    
      {/* Main Layout: 3 Columns */}
      <div className="container max-w-screen-xl mx-auto px-4 md:px-6 -mt-12 relative z-10 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: ToC (Visible on Desktop) */}
              <aside className="hidden lg:block lg:col-span-3">
                  <TableOfContents headings={headings} />
              </aside>

              {/* Center Column: Content */}
              <main className="lg:col-span-6 bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-100">
                   {post.coverImage && (
                        <div className="mb-10 relative aspect-video rounded-xl overflow-hidden shadow-sm bg-slate-100">
                            <Image 
                                src={post.coverImage} 
                                alt={post.title} 
                                fill 
                                className="object-cover"
                            />
                        </div>
                    )}
                  
                  <article 
                    className="prose prose-lg prose-slate max-w-none 
                    prose-headings:font-bold prose-headings:text-heading
                    prose-p:text-body prose-p:leading-8
                    prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
                    prose-img:rounded-xl prose-strong:text-heading"
                    dangerouslySetInnerHTML={{ __html: content }}
                    />
                    
                     <div className="mt-12 pt-8 border-t border-slate-100">
                        <div className="flex gap-2">
                            {post.tags?.map((tag) => (
                            <span key={tag} className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                                #{tag}
                            </span>
                            ))}
                        </div>
                    </div>
              </main>

              {/* Right Column: Author & Newsletter */}
              <aside className="lg:col-span-3 space-y-8">
                   <div className="lg:sticky lg:top-24 space-y-8">
                        <NewsletterCTA />
                         {post.author && (
                              <div className="bg-muted border border-border rounded-xl p-6">
                                  <h4 className="font-bold text-heading mb-4 uppercase tracking-wider text-xs">About the Author</h4>
                                 <div className="flex items-start gap-4">
                                     <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-200 shrink-0">
                                        <Image
                                            src={post.author.image}
                                            alt={post.author.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold text-heading">{post.author.name}</div>
                                        {post.author.twitter && (
                                            <Link href={`https://twitter.com/${post.author.twitter}`} className="text-brand-blue text-xs hover:underline block mt-1">
                                                @{post.author.twitter}
                                            </Link>
                                        )}
                                    </div>
                                 </div>
                             </div>
                        )}
                   </div>
              </aside>

          </div>
      </div>
    </>
  );
}
