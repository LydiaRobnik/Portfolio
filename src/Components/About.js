import React from 'react';
import { Text, Heading, Box, Flex, Image } from '@chakra-ui/react';
import ChakraBox from './ChakraBox';
import '../Styles/about.css';
// import { AnimatePresence } from 'framer-motion';

const About = () => {
  const bubbles = [
    {
      id: 1,
      image: 'bubbles_1.png',
      zIndex: 19,
      animate: {
        y: [0, -200],
        x: [0, 80],
        rotate: 10,
      },
    },
    {
      id: 2,
      image: 'bubbles_2.png',
      zIndex: 18,
      animate: {
        y: [0, -200],
        x: [0, 80],
        rotate: 10,
      },
    },
    {
      id: 3,
      image: 'bubbles_3.png',
      zIndex: 17,
      animate: {
        y: [0, -200],
        x: [0, 80],
        rotate: 10,
      },
    },
  ];

  return (
    <>
      <Flex maxW="960px" mx="auto" id="about" pb={16}>
        <Flex
          mx={6}
          pt={16}
          w="100%"
          borderTop="1px"
          borderColor="orange.300"
          direction="row"
          align="center"
          justify="start"
          wrap="wrap"
        >
          <Box maxW="500px">
            <Heading as="h2" size="2xl">
              Who I Am
            </Heading>
            <Text my={6}>
              As a curiosity-driven front-end devoper I am interested in
              experimenting with technologies and continually expanding my
              knowledge.
            </Text>
            <Text my={6}>
              I'm happiest when I'm creating user friendly, well designed and
              technically smooth working products. I love working in a diverse
              and inspiring team and together making things better.
            </Text>
            <Text my={6}>
              Currently I am improving my design skills by playing around and
              creating illustrations using figma.
            </Text>
          </Box>
          <Flex direction="column" align="center" justify="center">
            <Box
              className="bubbleBox"
              mt={{ base: '-20rem', lg: '0' }}
              w="200px"
            >
              {bubbles &&
                bubbles.map(bubble => (
                  <ChakraBox
                    key={bubble.id}
                    animate={bubble.animate}
                    transition={{
                      duration: 20,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }}
                    className="bubbles"
                    initial={{ opacity: 0.5, scale: 0.8 }}
                    whileInView={{ opacity: 1 }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                      transition: { duration: 2 },
                    }}
                  >
                    <Image
                      src={bubble.image}
                      alt="illustration air bubbles when the wale exhales"
                      maxW="100px"
                      zIndex={bubble.zIndex}
                    />
                  </ChakraBox>
                ))}
            </Box>

            <ChakraBox
              animate={{
                x: [100, 30, 100],
                rotate: [5, -5, 5],
              }}
              transition={{
                duration: 20,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              zIndex={20}
            >
              <Image
                src="wale_transparent.png"
                alt="illustration of a wale"
                align="center"
                maxW="350px"
              />
            </ChakraBox>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
