'use client';

import { getPosts } from '@/services/posts.service';
import PostItem from './PostItem';
import { useEffect, useState } from 'react';
import { Post } from '@/models/post';

export default function PostsClient() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(({ data }) => setPosts(data));
  }, []);

  return (
    <>
      <ul>
        {posts.map((post, i) => (
          <PostItem post={post} key={i} />
        ))}
      </ul>
    </>
  );
}
