import Image from "next/image";
import Link from "next/link";
import { Twitter } from "lucide-react";

interface AuthorCardProps {
  author: {
    name: string;
    image: string;
    twitter?: string;
  };
}

export function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="flex items-center gap-4 py-6 border-y border-border">
      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-secondary">
        <Image
          src={author.image}
          alt={author.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-0.5">Written by</p>
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-foreground text-lg">{author.name}</h3>
          {author.twitter && (
            <Link
              href={`https://twitter.com/${author.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-sky-500 transition-colors"
            >
              <Twitter className="w-4 h-4" />
              <span className="sr-only">Twitter</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
