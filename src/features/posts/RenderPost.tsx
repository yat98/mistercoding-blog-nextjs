'use client';

import { Post } from '@/models/post';
import { media } from '@/utils/media';
import { Box, Image } from '@chakra-ui/react';
import Markdown from 'react-markdown';

interface Props {
  post: Post;
}

export default function RenderPost({ post }: Props) {
  const content = post?.content
    ?.flatMap((item) => item.children)
    ?.map((child) => child.text || '')
    ?.join('');

  return (
    <>
      <Box py={4} color={'gray.600'} fontSize={'lg'}>
        <Image
          width={600}
          src={media(post.thumbnail[0].url)}
          alt={post.title}
        />
        <Box mt={4}>
          <Markdown>{content}</Markdown>
        </Box>
      </Box>
    </>
  );
}
