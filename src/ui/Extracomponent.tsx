import { Flex, Box, chakra, Stack, Link } from '@chakra-ui/react';
import bgpic from "../images/bgpic.jpg";

const ExampleComponent = () => {
  return (
    <Flex
      // bg="page.background"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="gray.150"
        _dark={{
          bg: "gray.800",
        }}
      >
        <Box
          maxW="7xl"
          w={{
            md: "3xl",
            lg: "4xl",
          }}
          mx="auto"
          py={{
            base: 12,
            lg: 16,
          }}
          px={{
            base: 4,
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          alignItems={{
            lg: "center",
          }}
          justifyContent={{
            lg: "space-between",
          }}
        >
          <chakra.h2
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            fontWeight="extrabold"
            letterSpacing="tight"
            lineHeight="shorter"
            color="gray.900"
            _dark={{
              color: "gray.100",
            }}
          >
            <chakra.span display="block">Ready to dive in?</chakra.span>
            <chakra.span
              display="block"
              color="brand.600"
              _dark={{
                color: "gray.500",
              }}
            >
              Start your renting today.
            </chakra.span>
          </chakra.h2>
          <Stack
            direction={{
              base: "column",
              sm: "row",
            }}
            mt={{
              base: 8,
              lg: 0,
            }}
            flexShrink={{
              lg: 0,
            }}
          >
            <Link
              w={["full", , "auto"]}
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              px={5}
              py={3}
              border="solid transparent"
              fontWeight="bold"
              rounded="md"
              shadow="md"
              color="brand.600"
              bg="white"
              _hover={{
                bg: "brand.50",
              }}
            >
              Learn More
            </Link>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ExampleComponent;
