import { Box, Heading, Input, Text, Textarea, Button, Flex } from "@chakra-ui/react"
import { NextPage } from "next"
import AppLayout from "../components/AppLayout"
import React from "react"
import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import { useEffect, useState } from "react"
import { setupUserTx } from "../cadence/transactions/setup_user.js"
import NavbarNew from "../ui/Navbar/NavbarNew"
import { mintNFT } from "../cadence/transactions/mint_assets.js";
import { Web3Storage } from 'web3.storage'

fcl.config().put("accessNode.api", "https://access-testnet.onflow.org").put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEYzQzZkYWRBNUIwMTZkMjkyNmYwN0VhZTYxODNhNTM2NjE2RjIwZTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODgxNDg3Mjk5NzUsIm5hbWUiOiJuZnRtYXJrIn0.u2a2AHBeLRCIHLC5ZteMU9-uwBAPLYOW11LpVjUbsDY",
});

const Assets: NextPage = () => {
  const [funding, setFunding] = useState("")
  const [auctionLength, setAuctionLength] = useState("")
  const [otherInformation, setOtherInformation] = useState("")
  const [projectId, setprojectId] = useState({
    projectId: 0,
  })

  const [user, setUser] = useState()
  const [NFTName, setNFTName] = useState()
  const [file, setFile] = useState()
  const [id, setId] = useState()
  const [priceStack, setPriceStack] = useState()
  const [pricePerDay, setPricePerDay] = useState()


  const setUserTx = async () => {
    console.log("setting up user")
    const transactionID = await fcl
      .send([
        fcl.transaction(setupUserTx),
        fcl.args([]),
        fcl.proposer(fcl.authz),
        fcl.payer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(999),
      ])
      .then(fcl.decode)

    console.log(transactionID)
    return fcl.tx(transactionID).onceSealed()
  }
  const set_file = () => {
    const fileInput = document.querySelector('input[type="file"]');
    setFile(fileInput);
    console.log(file);
  };
  const mint = async () => {
      console.log("Uploading file...");
      console.log(file);
      const rootCid = await client.put(file.files);
      console.log("Uploading file... stage2");
      const res = await client.get(rootCid);
      console.log(res);
      const hash = rootCid;
      console.log(hash);
      const transactionID = await fcl
        .send([
          fcl.transaction(mintNFT),
          fcl.args([fcl.arg(rootCid, t.String), fcl.arg(file.value.split("\\").pop(), t.String)]),
          fcl.proposer(fcl.authz),
          fcl.payer(fcl.authz),
          fcl.authorizations([fcl.authz]),
          fcl.limit(100),
        ])
        .then(fcl.decode);

      console.log(transactionID);
      return fcl.tx(transactionID).onceSealed();
  };

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const login = () => {
    fcl.authenticate();
  };

  return (
    <>
        <NavbarNew />
    <Flex align="center" justify="center" ml={4}>
      <Box>
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
          >
            {" "}
            Welcome To{" "}
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
              Add Assets
            </Box>
          </Heading>
        </Flex>
        <button onClick={() => login()}>Log in</button>
        <h3>your address is :{user && user.addr ? user.addr : ""}</h3>
        <form >
          <Box bg="white" p={6} rounded="lg">
                        
            <Box mb={4}>
              <Text color="gray.700" fontWeight="medium" mb={2}>
                Price to Stack
              </Text>
              <Input
                bg="gray.200"
                border="2px"
                borderColor="gray.200"
                rounded="md"
                w={500}
                py={2}
                px={4}
                color="gray.700"
                type="number"
                onChange={(e) => setPriceStack(e.target.value)}
              />
            </Box>
            <Box mb={4}>
              <Text color="gray.700" fontWeight="medium" mb={2}>
                Price per day
              </Text>
              <Input
                bg="gray.200"
                border="2px"
                borderColor="gray.200"
                rounded="md"
                w={500}
                py={2}
                px={4}
                color="gray.700"
                type="number"
                onChange={(e) => setPricePerDay(e.target.value)}
              />
            </Box>
            
            upload image
            <input type="file" onChange={(e) => set_file()} />
            
            <Button
              bg="purple.500"
              color="white"
              fontWeight="medium"
              rounded="md"
              py={2}
              px={4}
              onClick={() => mint()}
            >
              Submit
            </Button>
          </Box>
        </form>
        {/* setup user collection  */}
        <Button
          bg="purple.500"
          color="white"
          fontWeight="medium"
          rounded="md"
          py={2}
          px={4}
          onClick={() => setUserTx()}
        >
          Setup user
        </Button>
      </Box>
    </Flex>
    </>
  )
}

export default Assets
