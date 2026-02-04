import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { glob } from 'glob';
import { BlogPost, BlogPostMetadata } from '@/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getBlogPosts(): BlogPostMetadata[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  // Use glob to find all .mdx files recursively
  const files = glob.sync('**/*.mdx', { cwd: BLOG_DIR });

  const posts = files
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);
      const readTime = readingTime(content);
      
      // Extract category from directory path (e.g. "marketing/post.mdx" -> "marketing")
      // If at root, default to "general" or "uncategorized"
      const pathParts = file.split('/');
      const category = pathParts.length > 1 ? pathParts[0] : 'general';

      return {
        slug: path.basename(file, '.mdx'),
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        readingTime: readTime.text,
        tags: data.tags || [],
        category: data.category || category, // Allow frontmatter override
        coverImage: data.coverImage,
        author: data.author,
      };
    })
    .sort((a, b) => (new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()));

  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  // We need to find the file path for this slug since it could be in any subdirectory
  const files = glob.sync('**/*.mdx', { cwd: BLOG_DIR });
  const file = files.find(f => path.basename(f, '.mdx') === slug);

  if (!file) {
    return null;
  }

  const filePath = path.join(BLOG_DIR, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const readTime = readingTime(content);

  const pathParts = file.split('/');
  const category = pathParts.length > 1 ? pathParts[0] : 'general';

  return {
    slug,
    title: data.title,
    description: data.description,
    publishedAt: data.publishedAt,
    readingTime: readTime.text,
    tags: data.tags || [],
    category: data.category || category,
    coverImage: data.coverImage,
    author: data.author,
    content,
  };
}

export function getAllCategories(): string[] {
  const posts = getBlogPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

export function getPostsByCategory(category: string): BlogPostMetadata[] {
    const posts = getBlogPosts();
    return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}
