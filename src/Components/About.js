import React from 'react';
import { Text, Heading, Box } from '@chakra-ui/react';

const About = () => {
  return (
    <>
      <Box mx={6} mt={[36]} id="about">
        <Heading as="h2" size="2xl">
          Who I Am
        </Heading>
        <Box>
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
      </Box>
    </>
  );
};

export default About;
