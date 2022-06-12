import React from 'react';
import { Grid, Text, Heading, Flex, Box, GridItem } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
  faNodeJs,
  faFigma,
} from '@fortawesome/free-brands-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

const techStack = [
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3 },
  { name: 'JavaScript', icon: faJs },
  { name: 'React', icon: faReact },
  { name: 'Git', icon: faGitAlt },
  { name: 'GitHub', icon: faGithub },
  { name: 'NodeJS', icon: faNodeJs },
  { name: 'Figma', icon: faFigma },
  { name: 'Responsive Websites', icon: faMobileScreenButton },
];

const Toolbox = () => {
  return (
    <>
      <Flex
        maxW="960px"
        h="100vh"
        mx="auto"
        id="skills"
        direction="column"
        align="center"
        justify="center"
      >
        <Box mx={6}>
          <Heading as="h2" size="2xl">
            My Toolbox
          </Heading>

          <Grid templateColumns="repeat(3, 1fr)" gap={4} my={16} pb={16}>
            {techStack.map(skill => (
              <GridItem key={skill.name}>
                <Flex
                  w="100%"
                  h="100%"
                  direction="column"
                  align="center"
                  justify="center"
                >
                  <FontAwesomeIcon icon={skill.icon} size="4x" />
                  <Text fontSize="md" textAlign={'center'} pt={1}>
                    {skill.name}
                  </Text>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default Toolbox;
