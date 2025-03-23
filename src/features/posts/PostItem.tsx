'use client';

import { Post } from '@/models/post';
import { media } from '@/utils/media';
import { Box, CardBody, CardRoot, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  post: Post;
}

export default function PostItem({ post }: Props) {
  return (
    <CardRoot
      my={8}
      overflow={'hidden'}
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={'center'}
    >
      <Image
        maxW={{ base: '100%', md: '150px' }}
        objectFit="cover"
        src={media(post.thumbnail[0].url)}
        alt={post.title}
        width={150}
        height={150}
      />
      <Box>
        <CardBody>
          <Link href={`/post/${post.slug}`}>
            <Text fontWeight={'bold'} fontSize={'lg'} color={'gray.600'}>
              {post.title}
            </Text>
          </Link>
          <Text fontSize={'md'} color={'gray.600'}>
            {post.short_description}
          </Text>
        </CardBody>
      </Box>
    </CardRoot>
  );
}
