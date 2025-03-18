'use client';

import { Heading, Text } from '@chakra-ui/react';

interface Props {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <>
      <Heading size="2xl">{title}</Heading>
      {subtitle && (
        <Text fontWeight={'light'} fontSize={'md'}>
          {subtitle}
        </Text>
      )}
    </>
  );
}
