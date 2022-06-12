import React from 'react';
import { Flex } from '@chakra-ui/react';

const Projects = () => {
  return (
    <Flex
      maxW="960px"
      h="100vh"
      id="projects"
      direction="column"
      align="center"
      justify="center"
    >
      <Box mx={6}>
        <Heading as="h2" size="2xl">
          Projects
        </Heading>
      </Box>
    </Flex>
  );
};

export default Projects;
