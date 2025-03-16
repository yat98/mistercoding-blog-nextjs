"use client"

import { useColorModeValue } from "@/components/ui/color-mode"
import { Box, DrawerRoot, DrawerContent } from "@chakra-ui/react"
import { useState } from "react"
import { MobileNav, SideBarContent } from "./sidebar"

export default function LayoutContainer({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <SideBarContent
        onClose={() => setOpen(false)}
        display={{ base: "none", md: "block" }}
      />
      <DrawerRoot
        open={open}
        placement={"start"}
        onOpenChange={() => setOpen(false)}
        size="full">
          <DrawerContent>
            <SideBarContent
              onClose={() => setOpen(false)}
            />
          </DrawerContent>
      </DrawerRoot>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={() => setOpen(true)} />
      <Box ml={{ base: 0, md: 60 }} p={4}>
        {children}
      </Box>
    </Box>
  )
}