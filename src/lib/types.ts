import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
  label?: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  description: string;
  sourceCode: string;
  output: string;
  commonErrors: string;
  howToRun: string;
  tags: string[];
}

export interface Note {
  id: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  pdfUrl?: string;
  codeSnippet?: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  videoId: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface ResearchArticle {
  id: string;
  title: string;
  source: 'GeeksforGeeks' | 'Google' | 'YouTube' | 'W3Schools' | 'Other';
  url: string;
  content: string; // This is the content to be summarized
}

export interface LearningStep {
  title: string;
  description: string;
  icon: LucideIcon;
}
