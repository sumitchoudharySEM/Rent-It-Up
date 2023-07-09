import { Box, Heading, Flex, chakra, Image, SimpleGrid } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppLayout from '../components/AppLayout';
import NavbarNew from '../ui/Navbar/NavbarNew';



const Marketplace: NextPage = () => {
  return (
    <Box>
      <NavbarNew/>
      {/* <AppLayout> */}
        <Box padding="4">
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
                Rental Marketplace
              </Box>
            </Heading>
          </Flex>
        </Box>
        <SimpleGrid columns={4} spacing={4} p={4}>
          {[...Array(16)].map((_, index) => (
            <Card key={index} />
          ))}
        </SimpleGrid>
      {/* </AppLayout> */}
    </Box>
  );
};

const Card = () => {
  return (
    <Box
      bg="white"
      shadow="lg"
      rounded="lg"
      p={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box flex="1">
        <chakra.h1
          color="gray.800"
          fontWeight="bold"
          fontSize="3xl"
          textTransform="uppercase"
          mb={2}
        >
          NIKE AIR
        </chakra.h1>
        <chakra.p color="gray.600" fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequi
          illum facere recusandae voluptatibus.
        </chakra.p>
      </Box>

      <Box>
        <Image
          h={48}
          w="full"
          fit="cover"
          mt={2}
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />
      </Box>

      <Box mt={4} display="flex" alignItems="center" justifyContent="space-between">
        <chakra.h1 color="gray.800" fontWeight="bold" fontSize="lg">
          $129
        </chakra.h1>
        <chakra.button
          px={2}
          py={1}
          bg="white"
          fontSize="xs"
          color="gray.900"
          fontWeight="bold"
          rounded="lg"
          textTransform="uppercase"
          _hover={{
            bg: 'gray.200',
          }}
          _focus={{
            bg: 'gray.400',
          }}
        >
          Add to cart
        </chakra.button>
      </Box>
    </Box>
  );
};

export default Marketplace;
