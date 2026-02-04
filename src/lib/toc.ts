import { slug } from "github-slugger";

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(markdown: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.*)$/gm;
  const headings: Heading[] = [];
  let match;

  const cleanText = (text: string) => {
    return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links [text](url) -> text
               .replace(/`([^`]+)`/g, '$1')             // Remove code `text` -> text
               .replace(/\*\*([^*]+)\*\*/g, '$1')       // Remove bold **text** -> text
               .replace(/\*([^*]+)\*/g, '$1')           // Remove italic *text* -> text
  }

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = cleanText(match[2].trim());
    const id = slug(text);

    headings.push({
      id,
      text,
      level,
    });
  }

  return headings;
}
