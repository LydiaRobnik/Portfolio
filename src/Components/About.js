import React from 'react';
import { Grid, Text, Heading, Flex, GridItem } from '@chakra-ui/react';
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
import {
  faLaptop,
  faMobileScreenButton,
} from '@fortawesome/free-solid-svg-icons';
import './about.css';

const About = () => {
  return (
    <>
      <Grid
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={2}
        mt={[24]}
        id="about"
      >
        <GridItem colSpan={10} colStart={2} colEnd={12} rowSpan={1}>
          <Heading as="h2" fontSize="2xl">
            My Toolbox
          </Heading>
        </GridItem>
        <GridItem
          colSpan={10}
          colStart={2}
          colEnd={12}
          rowSpan={3}
          maxW="960px"
        >
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FontAwesomeIcon icon={faHtml5} size="4x" />
              <Text fontSize="md">HTML5</Text>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FontAwesomeIcon icon={faCss3} size="4x" />
              <Text>CSS3</Text>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FontAwesomeIcon icon={faJs} size="4x" />
              <Text>JavaScript</Text>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FontAwesomeIcon icon={faReact} size="4x" />
              <Text>React</Text>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FontAwesomeIcon icon={faGitAlt} size="4x" />
              <Text>Git</Text>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FontAwesomeIcon icon={faGithub} size="4x" />
              <Text>GitHub</Text>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FontAwesomeIcon icon={faNodeJs} size="4x" />
              <Text>NodeJS</Text>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              {/* <FontAwesomeIcon icon={faLaptop} size="4x" /> */}
              <FontAwesomeIcon icon={faMobileScreenButton} size="3x" />
              <Text textAlign="center">Responsive Websites</Text>
            </Flex>
            <Flex
              w="100%"
              h="100%"
              direction="column"
              align="center"
              justify="center"
            >
              <FontAwesomeIcon icon={faFigma} size="4x" />
              <Text>Figma</Text>
            </Flex>
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
};

export default About;
