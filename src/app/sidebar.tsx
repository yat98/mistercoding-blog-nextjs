import { useColorModeValue } from "@/components/ui/color-mode"
import { AvatarFallback, AvatarImage, AvatarRoot, Box, CloseButton, Flex, FlexProps, Text, VStack, Link as LinkChakraUI, BoxProps, IconButton } from "@chakra-ui/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiMenu } from "react-icons/fi"

interface LinkItemProps {
  name: string
  url: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
]

interface NavItemProps extends FlexProps {
  children: string | number;
  url: string;
}

const NavItem = ({ url, children, ...rest }: NavItemProps) => { 
  const pathName = usePathname()

  return (
    <LinkChakraUI
      as={Link}
      href={url}
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
        <Flex
          align={'center'}
          p={4}
          mx={4}
          borderRadius={"lg"}
          role="group"
          cursor="pointer"
          color={pathName === url ? "yellow.400" : "white"}
          _hover={{
            color: 'yellow.500',
            fontWeight: 'bold',
          }}
          {...rest}>
            {children}
        </Flex>
    </LinkChakraUI>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

export const SideBarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("gray.800", "white")}
      borderRightWidth={1}
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
        <Flex h={40} mt={50} alignItems={"center"} justifyContent={"center"} mx={8}>
          <VStack>
            <AvatarRoot size={"2xl"}>
              <AvatarFallback>JD</AvatarFallback>
              <AvatarImage src="https://bit.ly/john-dixon" />
            </AvatarRoot>
            <Text fontSize={"lg"} color={"white"} mt={4} fontWeight={"bold"}>John Dixon</Text>
            <Text fontSize={"xs"} color={"white"}>Software Engineer</Text> 
          </VStack>
        </Flex>

        <CloseButton 
          display={{ base: "block", md: "none" }} 
          pos={"absolute"} 
          top={0} 
          right={0} 
          _hover={{ color: 'white', bg: "transparent" }}
          color={"white"} 
          onClick={onClose} />

        <VStack mt={10}>
          {LinkItems.map((item, index) => (
            <NavItem key={index} url={item.url}>
              {item.name}
            </NavItem>
          ))}
        </VStack>
    </Box>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height={"20"}
        alignItems={"center"}
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth={1}
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={"flex-start"}
        {...rest}>
          <IconButton
            variant={"outline"}
            onClick={onOpen}
            aria-label={"Open menu"}>
            <FiMenu />
          </IconButton>
      </Flex>
    </>
  )
}