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
        // h="100vh"
        mx="auto"
        id="skills"
        direction="row"
        align="center"
        justify="center"
        // pb={16}
      >
        <Flex
          w="100%"
          mx={6}
          py={16}
          borderY="1px"
          borderColor="orange.200"
          direction="column"
        >
          <Heading as="h2" size="2xl">
            My Toolbox
          </Heading>
          <Flex
            direction="row"
            justify="center"
            align="stretch"
            mt={8}
            bgGradient="linear(to-tl, cyan.400, teal.400, green.300)"
          >
            <Grid
              templateColumns="repeat(auto-fill, minmax(100px, 1fr))"
              gap={4}
              my={8}
              maxW="430px"
              border="20px"
              borderColor="cyan.100"
            >
              {techStack.map(skill => (
                <GridItem key={skill.name}>
                  <Flex
                    w="100%"
                    h="100%"
                    direction="column"
                    align="center"
                    justify="center"
                  >
                    <FontAwesomeIcon
                      icon={skill.icon}
                      size="4x"
                      color="white"
                    />
                    <Text
                      fontSize="md"
                      color="white"
                      textAlign={'center'}
                      pt={1}
                    >
                      {skill.name}
                    </Text>
                  </Flex>
                </GridItem>
              ))}
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Toolbox;
