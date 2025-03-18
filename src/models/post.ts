export interface Post {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  short_description: string;
  content: Content[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  post_categories: PostCategory[];
  thumbnail: Thumbnail[];
}

export interface Content {
  type: string;
  children: Children[];
}

export interface Children {
  text: string;
  type: string;
}

export interface PostCategory {
  id: number;
  documentId: string;
  category_name: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Thumbnail {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | number | null;
  caption: string | number | null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | number | null;
  provider: string;
  provider_metadata: string | number | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Formats {
  large: Large;
  small: Small;
  medium: Medium;
  thumbnail: Thumbnail2;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | number | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Small {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | number | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Medium {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | number | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Thumbnail2 {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | number | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
