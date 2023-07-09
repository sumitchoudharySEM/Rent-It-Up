import {
  Box,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  HStack,
  IconButton,
  Button,
} from "@chakra-ui/react"
import * as React from "react"
import { BsDiscord, BsGithub, BsTwitter } from "react-icons/bs"
import { useAuthContext } from "../hooks/useAuthContext"

export const Footer: React.FunctionComponent = () => {
  const { session } = useAuthContext()
  return (
      <Flex
      bg="page.background"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={20}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{
          base: "column",
          sm: "row",
        }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="gray.400"
        _dark={{
          bg: "gray.800",
        }}
      >
        <ChakraLink
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _dark={{
            color: "white",
            _hover: {
              color: "gray.300",
            },
          }}
          _hover={{
            color: "gray.700",
          }}
        >
          Brand
        </ChakraLink>

        <Box
          py={{
            base: "2",
            sm: "0",
          }}
          color="gray.800"
          _dark={{
            color: "white",
          }}
        >
         <strong>All rights reserved</strong> 
        </Box>

        <Flex mx="-2">
          <ChakraLink
            href="#"
            mx="2"
            color="gray.600"
            _dark={{
              color: "gray.300",
              _hover: {
                color: "gray.400",
              },
            }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Reddit"
          >
            {/* <Icon as={AiFillRedditCircle} boxSize="5" /> */}
          </ChakraLink>

          <ChakraLink
            href="#"
            mx="2"
            color="gray.600"
            _dark={{
              color: "gray.300",
              _hover: {
                color: "gray.400",
              },
            }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Facebook"
          >
            {/* <Icon as={AiFillFacebook} boxSize="5" /> */}
          </ChakraLink>

          <ChakraLink
            href="#"
            mx="2"
            color="gray.600"
            _dark={{
              color: "gray.300",
              _hover: {
                color: "gray.400",
              },
            }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="Github"
          >
            {/* <Icon as={AiFillGithub} boxSize="5" /> */}
          </ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  
  )
}
