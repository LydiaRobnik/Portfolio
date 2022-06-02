import React from 'react';
import { useColorMode, Image, Box, Heading } from '@chakra-ui/react';

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box maxW="960px" mx="auto" mt={[24]} textAlign="center">
        <Heading as="h2" my="3rem">
          Welcome, I am Lydia
        </Heading>
        <Image
          src={
            colorMode === 'light'
              ? 'profile-pic-ly-light.jpg'
              : 'profile-pic-ly-dark.jpg'
          }
          alt="Profile picture Lydia Robnik"
        />
      </Box>
      <Heading as="h1" my="3rem" textAlign="center">
        Front-End Developer
      </Heading>
    </>
  );
};

export default Home;
