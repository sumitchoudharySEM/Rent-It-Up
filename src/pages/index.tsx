import AppLayout from "../components/AppLayout"
import { Center, Box, VStack, Text, Button } from "@chakra-ui/react"
import { WalletDetails } from "ui/Wallet/WalletDetails"
import { Logout } from "@components/Logout"
import NavbarNew from '../ui/Navbar/NavbarNew';

import { useAuthContext } from "hooks/useAuthContext"
import bgpic from "../images/bgpic.jpg";

import { FaGoogle } from "react-icons/fa"
import { useWalletQuery } from "@niftory/sdk"

const HomePage = () => {


  const { session, signIn, isLoading } = useAuthContext()

  const [{ data, fetching: walletFetching }] = useWalletQuery()

  const wallet = data?.wallet
  const fetching = walletFetching || isLoading

  const backgroundStyle = {
    backgroundImage: `url(${bgpic.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // height: '100vh',
    // width: '100vw',
  };  
  return (
   <Box h="100vh"  style={backgroundStyle}>
  <Box>
          <NavbarNew />
      <Center py={{ base: "1rem" }} flexDir="column" position="relative">
        <Box px="1rem">
          <VStack>
            {!session && (
              <Box >
                  <Box
                  bg="white"
                  borderRadius="md"
                  boxShadow="lg"
                  p={8}
                  maxW="md"
                  mx="auto"
                  mt={10}
                  alignItems="Center" justifyContent="Center"
                >
                  <Text textAlign="center" fontWeight="semibold" fontSize="xl" mb={6}>
                    Login
                  </Text>
                  <Button
                    w="full"
                    isLoading={false} // Set isLoading to true when the sign-in process is in progress
                    onClick={() => {}}
                    colorScheme="red"
                    leftIcon={<FaGoogle />}
                  >
                    Sign in with Google
                  </Button>
                </Box>
                </Box>
            )}
            {session && (
              <VStack>
                <WalletDetails
                  isLoading={fetching}
                  walletAddress={wallet?.address}
                  walletItems={wallet?.nfts?.length}
                  walletStatus={wallet?.state?.toString()}
                  walletOwnerEmail={wallet?.appUser?.email}
                />
                <Logout />
              </VStack>
            )}
          </VStack>
        </Box>
      </Center>
      </Box>
      </Box>
     
  )
}

export default HomePage
