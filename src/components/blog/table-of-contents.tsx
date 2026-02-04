"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { List } from "lucide-react";

interface ToCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: ToCItem[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      // Offset to account for sticky header (e.g. 100px)
      const scrollPosition = window.scrollY + 100;
      
      let currentId = "";
      
      // Iterate through headings to find the last one that has been scrolled past
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && element.offsetTop <= scrollPosition) {
          currentId = heading.id;
        }
      }
      
      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 bg-muted border border-border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4 text-brand-blue">
        <List className="w-5 h-5" />
        <span className="font-bold uppercase tracking-wider text-xs">Table of Contents</span>
      </div>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              "pl-3 py-1 transition-colors duration-200 border-l-2",
              heading.level === 3 && "ml-3",
              activeId === heading.id
                ? "border-brand-blue text-brand-blue font-medium"
                : "border-transparent text-muted-foreground hover:text-heading"
            )}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: "smooth",
                });
                setActiveId(heading.id);
              }}
              className="block leading-snug"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
