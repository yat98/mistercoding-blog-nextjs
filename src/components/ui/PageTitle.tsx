'use client';

import { Heading } from '@chakra-ui/react';

interface Props {
  title: string;
}

export default function PageTitle({ title }: Props) {
  return <Heading size="2xl">{title}</Heading>;
}
