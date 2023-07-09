import { Box, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import AppLayout from '../components/AppLayout';


const Assets: NextPage = () => {
    return (
      <Box>
        <AppLayout>
        <Heading>Welcome to the Assets Page!</Heading>
        {/* Add your desired content here */}
        </AppLayout>
      </Box>
    );
  };
  

  export default Assets;
