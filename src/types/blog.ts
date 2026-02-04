export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags?: string[];
  category: string;
  coverImage?: string;
  author?: {
    name: string;
    image: string;
    twitter?: string;
  };
  content: string; // The raw MDX content
};

export type BlogPostMetadata = Omit<BlogPost, 'content'>;
