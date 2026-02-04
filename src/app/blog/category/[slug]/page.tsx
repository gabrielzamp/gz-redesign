import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostsByCategory, getAllCategories } from "@/lib/blog";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { CategorySidebar } from "@/components/blog/category-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase(),
  }));
}

export default function CategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.slug);
  const posts = getPostsByCategory(category);
  const allCategories = getAllCategories();

  if (posts.length === 0) {
    notFound();
  }

  // Capitalize for display
  const displayCategory = posts[0].category;

  return (
    <div className="container py-20">
      <div className="max-w-screen-xl mx-auto space-y-12">
        
        {/* Header & Nav */}
        <div className="space-y-8">
            <Breadcrumbs 
                items={[
                    { label: "Blog", href: "/blog" },
                    { label: displayCategory }
                ]} 
            />
            
            <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {displayCategory}
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Read the latest thoughts and guides about {displayCategory}.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 hidden lg:block">
                <CategorySidebar categories={allCategories} activeCategory={category} />
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group relative flex flex-col space-y-3 p-6 rounded-2xl border border-transparent hover:bg-secondary/20 hover:border-border transition-all"
                    >
                        <div className="flex flex-col space-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <span className="font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full text-xs">
                                {post.category}
                            </span>
                            <span>•</span>
                            <span>{post.publishedAt}</span>
                            <span>•</span>
                            <span>{post.readingTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                            {post.title}
                        </h2>
                        <p className="text-muted-foreground line-clamp-3">
                            {post.description}
                        </p>
                        </div>
                        <div className="pt-4 mt-auto">
                        <span className="text-sm font-medium text-primary flex items-center gap-1 group-hover:underline">
                            Read more <ArrowLeft className="w-4 h-4 rotate-180" />
                        </span>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
