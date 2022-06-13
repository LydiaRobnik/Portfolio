import React from 'react';
import {
  // useColorMode,
  Image,
  Heading,
  IconButton,
  Flex,
  useMediaQuery,
  Box,
  Text,
} from '@chakra-ui/react';
import { animateScroll as scroll } from 'react-scroll';
import { ArrowUpIcon } from '@chakra-ui/icons';
import '../Styles/home.css';

import About from './About';
import Toolbox from './Toolbox';
// import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  // const { colorMode } = useColorMode();
  const [isSmallerThan310] = useMediaQuery('(max-width: 310px)');
  return (
    <>
      <header>
        <Flex
          maxW="960px"
          mx="auto"
          id="home"
          direction="row"
          align="center"
          justify="center"
          pt={32}
          pb={16}
        >
          <Flex
            direction="row"
            align="start"
            justify="center"
            wrap="wrap"
            w="100%"
            mx={6}
          >
            <Image
              src="profile-pic-ly-stripes.jpg"
              borderRadius="md"
              alt="Profile picture Lydia Robnik"
              maxW="300px"
              mx={6}
            />
            <Box maxW={['100%', '100%', '50%']}>
              <Heading
                as="h2"
                mt="1.5rem"
                size={isSmallerThan310 ? 'md' : ['lg']}
                // textAlign={{ base: 'center', sm: 'left' }}

                w="100%"
                // color="white"
              >
                Welcome, I am Lydia
              </Heading>

              <Heading
                as="h1"
                mb="1rem"
                size={isSmallerThan310 ? 'lg' : ['xl', '2xl', '3xl', '4xl']}
                // textAlign={{ base: 'center', sm: 'left' }}
                w={['100%', '100%', '100%', '50%']}
                color="transparent"
                bgGradient="linear(to-l, cyan.400, teal.400, green.300)"
                bgClip="text"
                // className="gradient"
              >
                Front-End Developer
              </Heading>
            </Box>
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
          <Flex justify={{ base: 'start', md: 'center' }} w="100%">
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
