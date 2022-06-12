import React from 'react';
import { Text, Heading, Box, Flex, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <Flex
        maxW="960px"
        // h="100vh"
        mx="auto"
        id="about"
        direction="column"
        align="center"
        justify="center"
        pb={16}
      >
        <Box mx={6} pt={16} borderTop="1px" borderColor="gray.200">
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
            technically smooth working products. I love working in a diverse and
            inspiring team and together making things better.
          </Text>
          <Text my={6}>
            Currently I am improving my design skills by playing around and
            creating illustrations using figma.
          </Text>
        </Box>
        <Image
          src="wale_transparent.png"
          alt="illustration of a wale"
          align="center"
          maxW="350px"
        />
      </Flex>
    </>
  );
};

export default About;
