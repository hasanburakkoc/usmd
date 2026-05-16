export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  sections: readonly { heading?: string; paragraphs: readonly string[] }[];
};
