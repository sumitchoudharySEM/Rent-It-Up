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
    <Box>
    </Box>
  )
}
