import React from 'react';
import {
  useColorMode,
  Image,
  Heading,
  IconButton,
  Flex,
  useMediaQuery,
  Box,
  Text,
} from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';
import About from './About';
import Toolbox from './Toolbox';
// import Projects from './Projects';
import Contact from './Contact';
import { ArrowUpIcon } from '@chakra-ui/icons';
import '../Styles/home.css';

const Home = () => {
  const { colorMode } = useColorMode();
  const [isSmallerThan310] = useMediaQuery('(max-width: 310px)');
  return (
    <>
      <header>
        <Flex
          maxW="960px"
          // h="100vh"
          mx="auto"
          id="home"
          direction="row"
          align="center"
          justify="center"
          pt={32}
          pb={16}
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            w="100%"
            mx={6}
          >
            <Heading
              as="h2"
              my="1rem"
              size={isSmallerThan310 ? 'lg' : ['xl', '2xl']}
              textAlign={{ base: 'center', sm: 'left' }}
              w="100%"
            >
              Welcome, I am Lydia
            </Heading>
            <Image
              src={
                colorMode === 'light'
                  ? 'profile-pic-ly-light.jpg'
                  : 'profile-pic-ly-dark.jpg'
              }
              alt="Profile picture Lydia Robnik"
              maxW="300px"
              m={0}
            />
            <Heading
              as="h1"
              my="1rem"
              size={isSmallerThan310 ? 'lg' : ['xl', '2xl']}
              textAlign={{ base: 'center', sm: 'left' }}
              w="100%"
            >
              Front-End Developer
            </Heading>
          </Flex>
        </Flex>
      </header>
      <main>
        <About />
        <Toolbox />
        {/* <Projects /> */}
        <Contact />
      </main>
      <footer>
        <Flex mx={6} justify="end">
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
        <Box bg="cyan.800" h="100px">
          <Flex justify="start" w="100%">
            <Text
              my={10}
              mx={6}
              fontSize={isSmallerThan310 ? '10px' : ['0.65rem', '0.8rem']}
              color="white"
            >
              Lydia Robnik - Friedrichstr. 59 - 68809 Neulußheim
            </Text>
          </Flex>
        </Box>
      </footer>
    </>
  );
};

export default Home;
