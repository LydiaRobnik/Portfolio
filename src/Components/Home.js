import React from 'react';
import { useColorMode, Image, Box, Heading } from '@chakra-ui/react';

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box maxW="960px" mx="auto" mt={[28]} textAlign="center">
        <Heading as="h2" my="1rem">
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
      <Heading as="h1" my="1rem" textAlign="center">
        Front-End Developer
      </Heading>
    </>
  );
};

export default Home;
