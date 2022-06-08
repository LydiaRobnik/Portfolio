import React from 'react';
import { Grid, Text, Heading, Flex, GridItem, Box } from '@chakra-ui/react';
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
      <Box maxW="960px" h="100vh" mx={6} mt={[36]} id="skills">
        <Box mx={6} mt={[36]}>
          <Heading as="h2" size="2xl">
            My Toolbox
          </Heading>
        </Box>

        <Grid templateColumns="repeat(3, 1fr)" gap={4} my={24}>
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
                <Text fontSize="md">{skill.name}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Toolbox;
