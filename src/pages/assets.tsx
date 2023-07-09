import { Box, Heading, Input, Text, Textarea, Button, Flex } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppLayout from '../components/AppLayout';
import React, { useState } from 'react';

const Assets: NextPage = () => {
  const [funding, setFunding] = useState('');
  const [auctionLength, setAuctionLength] = useState('');
  const [otherInformation, setOtherInformation] = useState('');
  const [projectId, setprojectId] = useState({
    projectId: 0
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your submit logic here, e.g. sending the form data to your API
  };

  return (
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
            > Welcome To {" "}
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
        <form onSubmit={handleSubmit}>
          <Box bg="white" p={6} rounded="lg">
            <Box mb={4}>
              <Text color="gray.700" fontWeight="medium" mb={2}>
                Project ID: {projectId.projectId}
              </Text>
              <Input
                bg="gray.200"
                border="2px"
                borderColor="gray.200"
                rounded="md"
                w={500}
                py={2}
                mr={2}
                px={4}
                color="gray.700"
                value={projectId.projectId}
                onChange={(e) => setprojectId({ projectId: e.target.value })}
              />
            </Box>
            <Box mb={4}>
              <Text color="gray.700" fontWeight="medium" mb={2}>
                Bidding Amount
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
                value={funding}
                onChange={(e) => setFunding(e.target.value)}
              />
            </Box>
            <Box mb={4}>
              <Text color="gray.700" fontWeight="medium" mb={2}>
                Wallet Address
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
                type="text"
                value={auctionLength}
                onChange={(e) => setAuctionLength(e.target.value)}
              />
            </Box>
            <Box mb={4}>
              <Text color="gray.700" fontWeight="medium" mb={2}>
                Other Information
              </Text>
              <Textarea
                bg="gray.200"
                border="2px"
                borderColor="gray.200"
                rounded="md"
                w={500}
                py={2}
                px={4}
                color="gray.700"
                value={otherInformation}
                onChange={(e) => setOtherInformation(e.target.value)}
              />
            </Box>
            <Button
              bg="purple.500"
              hoverBg="purple.600"
              color="white"
              fontWeight="medium"
              rounded="md"
              py={2}
              px={4}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      
    </Box>
    </Flex>
  );
};

export default Assets;
