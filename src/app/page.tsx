"use client";

import { AvatarFallback, AvatarImage, AvatarRoot, Wrap, WrapItem } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Wrap>
        <WrapItem>
          <AvatarRoot>
            <AvatarFallback>DA</AvatarFallback>
            <AvatarImage src="https://bit.ly/dan-abramov" />
          </AvatarRoot>
        </WrapItem>
        <WrapItem>
          <AvatarRoot>
            <AvatarFallback>CB</AvatarFallback>
            <AvatarImage src="https://bit.ly/code-beast" />
          </AvatarRoot>
        </WrapItem>
        <WrapItem>
          <AvatarRoot>
            <AvatarFallback>KD</AvatarFallback>
            <AvatarImage src="https://bit.ly/kent-c-dodds" />
          </AvatarRoot>
        </WrapItem>
        <WrapItem>
          <AvatarRoot>
            <AvatarFallback>RF</AvatarFallback>
            <AvatarImage src="https://bit.ly/ryan-florence" />
          </AvatarRoot>
        </WrapItem>
      </Wrap>
    </>
  )
}