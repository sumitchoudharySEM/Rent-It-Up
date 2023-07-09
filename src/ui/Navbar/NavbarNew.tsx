import React from 'react';
import {
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

const NavbarNew: React.FC = () => {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();

//   const navItems = [
//     { label: "Marketplace", href: "/marketplace" },
//     { label: "Home", href: "/home" },
//     { label: "Profile", href: "/" },
//     { label: "Add Assets", href: "/assets" },
//     { label: "Sign in", href: "/sign-in" },
//   ];

  return (
    <React.Fragment>
      <chakra.header position="sticky" top="0" zIndex={100} bg={bg} w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a href="/" title="Choc Home Page" display="flex" alignItems="center">
              {/* Replace with your logo component */}
              <Box boxSize={6} bg="brand.500" borderRadius="full" />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="3xl" fontWeight="extrabold" ml="2">
              Rent It Up 
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: 'none', md: 'inline-flex' }}
            
            >
<Button as="a" href="/marketplace" variant="ghost">Marketplace</Button>
<Button as="a" href="/home" variant="ghost">Home</Button>
<Button as="a" href="/" variant="ghost">Profile</Button>
<Button as="a" href="/assets" variant="ghost">Add Assets</Button>

  <Button  colorScheme='twitter' variant='solid'>
    Sign Out
  </Button>
 


            </HStack>
            <Button colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: 'inherit' }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

                <Button w="full" variant="ghost">
                  Marketplace
                </Button>
                <Button w="full" variant="ghost">
                  Home
                </Button>
                <Button w="full" variant="ghost">
                  Profile
                </Button>
                <Button w="full" variant="ghost">
                  Add Assets
                </Button>
                <Button w="full" variant="ghost">
                  Sign Out
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};

export default NavbarNew;
