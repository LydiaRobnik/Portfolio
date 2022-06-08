import React from 'react';
import {
  useColorMode,
  Image,
  Box,
  Heading,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';
import About from './About';
import Toolbox from './Toolbox';
import Projects from './Projects';
import Contact from './Contact';
import { ArrowUpIcon } from '@chakra-ui/icons';

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <header>
        <Box
          maxW="960px"
          h="100vh"
          mx="auto"
          mt={[28]}
          textAlign="center"
          id="home"
        >
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
      </header>
      <main>
        <About />
        <Toolbox />
        <Projects />
        <Contact />
      </main>
      <footer>
        <Flex mx={6} my={[8]} justify="end">
          <IconButton
            aria-label="scroll to top"
            icon={<ArrowUpIcon />}
            variant="solid"
            colorScheme="gray"
            pos="fixed"
            right="6"
            bottom="6"
            zIndex={10}
            isRound
            onClick={() => scroll.scrollToTop()}
          ></IconButton>
        </Flex>
      </footer>
    </>
  );
};

export default Home;
