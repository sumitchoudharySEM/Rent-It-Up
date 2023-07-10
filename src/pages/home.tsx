import { Box, Heading, chakra, Stack, Button, Icon,Image,  Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppLayout from '../components/AppLayout';
import ExampleComponent from 'ui/Extracomponent';
import NavbarNew from '../ui/Navbar/NavbarNew';
// Import Image that i recently added to images folder under src 
import Images from 'next/image';
import bgpic from "../images/bgpic.jpg";
import bgpic2 from "../images/bgpic2.png";
const Home: NextPage = () => {

  
  const backgroundStyle = {
    backgroundImage: `url(${bgpic.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // height: '100vh',
    // width: '100vw',
  };  
  
  return (
    <Box style={backgroundStyle}>
    <Box>
        <NavbarNew />
      {/* <AppLayout> */}
        <Box px={8} py={24} mx="auto">
          <Box
            w={{
              base: "full",
              md: 11 / 12,
              xl: 9 / 12,
            }}
            mx="auto"
            textAlign={{
              base: "left",
              md: "center",
            }}
          >
            <Heading
              mb={6}
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
              All your{" "}
              <Text
                display={{
                  base: "block",
                  lg: "inline",
                }}
                w="full"
                bgClip="text"
                bgGradient="linear(to-r, green.400,purple.500)"
                fontWeight="extrabold"
              >
                Rental NFTs
              </Text>{" "}
              in one single place.
            </Heading>
            <chakra.p
              px={{
                base: 0,
                lg: 24,
              }}
              mb={6}
              fontSize={{
                base: "lg",
                md: "xl",
              }}
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
             Build with Cadence lengauge with walletless onboarding and Costodial hybrid wallet on our favorite Flow blockchain to power of buying and lending rental nfts.
            </chakra.p>
            <Stack
              direction={{
                base: "column",
                sm: "row",
              }}
              mb={{
                base: 4,
                md: 8,
              }}
              spacing={2}
              justifyContent={{
                sm: "left",
                md: "center",
              }}
            >
              <Button
                as="a"
                variant="solid"
                display="inline-flex"
                alignItems="center"
                href="/assets"
                justifyContent="center"
                w={{
                  base: "full",
                  sm: "auto",
                }}
                mb={{
                  base: 2,
                  sm: 0,
                }}
                size="lg"
                cursor="pointer"
              >
                Get Started
                <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="">
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </Icon>
              </Button>
             
            </Stack>
          </Box>
          <img src={ bgpic2} alt="" />
          <Box
            w={{
              base: "full",
              md: 10 / 12,
            }}
            mx="auto"
            mt={20}
            textAlign="center"
          >
            {/* <Image
              w="full"
              rounded="lg"
              shadow="2xl"
              src={bgpic2}/> */}
          </Box>
        </Box>
        <ExampleComponent />
        
      {/* </AppLayout> */}
    </Box>
    </Box>
    
  );
};

export default Home;
