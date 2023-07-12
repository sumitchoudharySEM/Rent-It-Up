import { Box, Heading, Input, Text, Textarea, Button, Flex, FormCotrol, FormLabel } from "@chakra-ui/react";
import { NextPage } from "next";
import AppLayout from "../components/AppLayout";
import React, { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import { setupUserTx } from "../cadence/transactions/setup_user";
import NavbarNew from "../ui/Navbar/NavbarNew";
import { mintNFT } from "../cadence/transactions/mint_assets";
import { Web3Storage } from "web3.storage";

fcl.config()
  .put("accessNode.api", "https://rest-testnet.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn");

const client = new Web3Storage({
  token:
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEYzQzZkYWRBNUIwMTZkMjkyNmYwN0VhZTYxODNhNTM2NjE2RjIwZTQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODgxNDg3Mjk5NzUsIm5hbWUiOiJuZnRtYXJrIn0.u2a2AHBeLRCIHLC5ZteMU9-uwBAPLYOW11LpVjUbsDY",
});

const Assets: NextPage = () => {
  const [funding, setFunding] = useState("");
  const [auctionLength, setAuctionLength] = useState("");
  const [otherInformation, setOtherInformation] = useState("");
  const [projectId, setprojectId] = useState({
    projectId: 0,
  });

  const [user, setUser] = useState<any>();
  const [NFTName, setNFTName] = useState("");
  const [file, setFile] = useState<any>();
  const [id, setId] = useState<number>();
  const [priceStack, setPriceStack] = useState<string>();
  const [pricePerDay, setPricePerDay] = useState<string>();

  const setUserTx = async () => {
    console.log("Setting up user");
    const transactionID = await fcl.send([
      fcl.transaction`{setupUserTx}`,
      fcl.args([]),
      fcl.proposer(fcl.authz),
      fcl.payer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(999),
    ]).then((response: any) => {
      const { transactionId } = response;
      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    });
  };
  

  const set_file = () => {
    const fileInput: any = document.querySelector('input[type="file"]');
    setFile(fileInput.files[0]);
    console.log(file);
  };

  const mint = async () => {
    console.log("Uploading file...");
    console.log(file);
    //const rootCid = await client.put([file]);
    console.log("Uploading file... stage2");
    //const res = await client.get(rootCid);
    //console.log(res);
    //const hash = rootCid;
    //console.log(hash);
    const transactionID = await fcl.send([
      fcl.transaction`${mintNFT}`,
      fcl.args([
        fcl.arg("HUU", t.String),
        fcl.arg("mu", t.String),
        fcl.arg(pricePerDay, t.UFix64),
        fcl.arg(priceStack, t.UFix64),
      ]),
      fcl.proposer(fcl.authz),
      fcl.payer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(100),
    ]).then((response: any) => {
      const { transactionId } = response;
      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    });
  };
  

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Add your submit logic here, e.g. sending the form data to your API
  };

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
        <Button onClick={() => login()} colorScheme="teal" variant="solid">Log in</Button>
        <Heading as="h3" size="md" mt={4}>Your address is: {user && user.addr ? user.addr : ''}</Heading>        <form >
          <Box bg="white" p={6} >
                        
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

            
            
            {/* <FormControl mt={4}> */}
            <FormLabel>Upload image</FormLabel>
            <Input type="file" onChange={(e) => set_file()} />
            {/* </FormControl> */}


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
