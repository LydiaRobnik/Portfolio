import React from 'react';
import { Text, Heading, Box, Flex, Image } from '@chakra-ui/react';
import ChakraBox from './ChakraBox';

const About = () => {
  return (
    <>
      <Flex
        maxW="960px"
        // h="100vh"
        mx="auto"
        id="about"
        pb={16}
      >
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

          <ChakraBox
            direction="column"
            align="center"
            justify="center"
            // sx={{ 'justify-self': 'end' }}
            animate={{
              x: [30, 100, 30],
              rotate: [5, -5, 5, -5, 5],
            }}
            transition={{
              duration: 20,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
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
    </>
  );
};

export default About;
