import Link from 'next/link';
import { getBlogPosts, getAllCategories } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Gabriel Zampieri',
  description: 'Sharing my thoughts on web development, growth marketing, and more.',
};

export default function BlogPage() {
  const posts = getBlogPosts();
  // const categories = getAllCategories();

  return (
    <>
      {/* Brand Blue Header */}
      <div className="bg-brand-blue text-white pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="container text-center space-y-6 relative z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            The <span className="text-blue-200">Growth</span> Blog
          </h1>
          <p className="text-blue-100 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
            Expand your SEO and marketing knowledge with detailed <br className="hidden md:block" />
            tutorials, engineering insights, and audited case studies.
          </p>
        </div>
        
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      <div className="container py-16">
        <div className="max-w-screen-xl mx-auto space-y-12">
          
           {/* Featured / Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <span className="text-xs font-bold tracking-wider uppercase text-muted-foreground mb-2 block">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-heading group-hover:text-brand-blue transition-colors line-clamp-3 leading-snug">
                      {post.title}
                    </h2>
                  </div>

                  {/* Card Content */}
                   <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
                    <p className="text-body text-sm line-clamp-3 mb-4 leading-relaxed">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mt-auto">
                        <div className="w-8 h-8 rounded-full bg-muted overflow-hidden relative">
                             {post.author?.image && (
                                <img src={post.author.image} alt={post.author.name} className="object-cover w-full h-full" />
                             )}
                        </div>
                        <div className="text-xs text-muted-foreground flex flex-col">
                            <span className="font-medium text-heading">{post.author?.name || 'Gabriel Zampieri'}</span>
                            <time dateTime={post.publishedAt}>
                                {new Date(post.publishedAt).toLocaleDateString(undefined, { month: 'long', day: 'numeric' })}
                            </time>
                        </div>
                    </div>
                  </div>
                </Link>
              ))}
           </div>
        </div>
      </div>
    </>
  );
}
