import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const Home = () => {
  return (
    <>
      <Box>
        <Image
          src="profile-pic-ly.jpg"
          alt="Profile picture Lydia Robnik"
          borderRadius="full"
        />
      </Box>
    </>
  );
};

export default Home;
