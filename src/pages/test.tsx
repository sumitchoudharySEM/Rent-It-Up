import { Box, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
// import Navbar from '../ui/Navbar/Nav';
import AppLayout from "../components/AppLayout"
import App from 'next/app';

const Test: NextPage = () => {
  return (
    <Box>
      {/* <Navbar /> */}
      <AppLayout>
      <Box padding="4">
        <Heading size="lg">Welcome to the 'Test' Page!</Heading>
        {/* Add your desired content here */}
      </Box>
      </AppLayout>  
    </Box>
  );
};

export default Test;

