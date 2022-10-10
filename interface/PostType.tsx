export type PostType = {
  id: string;
  title: string;
  datePublished: string;
  slug: string;
  content: Content;
  author: Author;
  coverImage: CoverImage;
};

export type Content = {
  html: string;
  text: string;
  raw: RawContent;
};

export type RawContent = {
  children: RawChildren[];
};
export type RawChildren = { type: string; children: { text: string }[] };

export type Author = {
  name: string;
  avatar: {
    url: string;
  };
};

export type CoverImage = {
  id: string;
  url: string;
};
