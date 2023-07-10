import { Box, Heading, Flex, chakra, Image, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppLayout from '../components/AppLayout';
import NavbarNew from '../ui/Navbar/NavbarNew';
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { useEffect, useState } from "react";
import { getMyNFTs } from "../cadence/scripts/mynfts.js";

fcl.config().put("accessNode.api", "https://access-testnet.onflow.org").put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");

const MyAssets = () => {

  const [userNFTs, setUserNFTs] = useState();
  const [user, setUser] = useState("");

  const login = () => {
    console.log("hii")
    fcl.authenticate();
    getUserNFTs();
  };

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
    if (user.addr){
    getUserNFTs();
    }
  }, [])
  
  const getUserNFTs = async () => {
    console.log("fun started");
    console.log(user.addr);
    console.log(user);
    const result = await fcl.send([
        fcl.script(getMyNFTs),
        fcl.args([]),
    ]).then(fcl.decode);
    console.log(result);
    console.log(hii);
    setUserNFTs(result);
    }

  // Dummy data for NFTs
  const nfts = [
    {
      id: 1,
      name: 'NFT 1',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80',
    },
    {
      id: 2,
      name: 'NFT 2',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80',
    },
    {
      id: 3,
      name: 'NFT 3',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80',
    },
  ];

  return (
    <>
      <NavbarNew />
    <Box align="center" justify="center">
    <button onClick={() => login()}>Log in</button>
        <h3>your address is :{user && user.addr ? user.addr : ""}</h3>
      
    <Flex align="center" justify="center">
            <Heading
              mb={6}
              mt={6}
              fontSize={{
                base: "4xl",
                md: "6xl",
              }}
              fontWeight="bold"
              lineHeight="none"
              letterSpacing={{
                base: "normal",
                md: "tight",
              }}
              color="gray.900"
              _dark={{
                color: "gray.100",
              }}
            > {" "}
              <Box
                display={{
                  base: "block",
                  lg: "inline",
                }}
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, green.400, purple.500)"
                fontWeight="extrabold"
              >
                Assets Owned
              </Box>
            </Heading>
          </Flex >
          <Flex align="center" justify="center" >
        <SimpleGrid display="flex" gap={10}>
          {nfts.map((nft) => (
            <Box
              key={nft.id}
              bg="white"
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              <Image src={nft.image} alt={nft.name} h={150} w={250} fit="cover" />
              <Box p={10}>
                <chakra.h3 fontSize="xl" fontWeight="bold" mb={2}>
                  {nft.name}
                </chakra.h3>
                {/* Add any additional information about the NFT */}
              </Box>
            </Box>
          ))}
        </SimpleGrid>
        </Flex>
    </Box>
    </>
  );
}

export default MyAssets;
