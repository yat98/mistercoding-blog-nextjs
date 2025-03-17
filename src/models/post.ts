export interface Post {
  id: number
  attributes: Attributes
}

export interface Attributes {
  title: string
  slug: string
  short_description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  content: string
  thumbnail: Thumbnail
  post_category: PostCategory
}

export interface Thumbnail {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes2
}

export interface Attributes2 {
  name: string
  alternativeText: string | null
  caption: string | null
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  createdAt: string
  updatedAt: string
}

export interface Formats {
  large: Large
  small: Small
  medium: Medium
  thumbnail: Thumbnail2
}

export interface Large {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

export interface Small {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

export interface Medium {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

export interface Thumbnail2 {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: string | null
  size: number
  width: number
  height: number
}

export interface PostCategory {
  data: Data2
}

export interface Data2 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
  category_name: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  description: string
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}