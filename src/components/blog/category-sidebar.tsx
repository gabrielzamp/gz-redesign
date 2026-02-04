import Link from "next/link";
import { cn } from "@/lib/utils";

interface CategorySidebarProps {
  categories: string[];
  activeCategory?: string;
}

export function CategorySidebar({ categories, activeCategory }: CategorySidebarProps) {
  return (
    <div className="bg-secondary/30 rounded-xl p-6 border border-border sticky top-24">
      <h3 className="font-bold text-foreground mb-4">Categories</h3>
      <div className="flex flex-col gap-2">
        <Link 
          href="/blog"
          className={cn(
            "text-sm px-3 py-2 rounded-md transition-colors",
            !activeCategory 
              ? "bg-primary text-primary-foreground font-medium" 
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          All Posts
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/blog/category/${category.toLowerCase()}`}
            className={cn(
              "text-sm px-3 py-2 rounded-md transition-colors capitalize",
              activeCategory?.toLowerCase() === category.toLowerCase()
                ? "bg-primary text-primary-foreground font-medium" 
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
