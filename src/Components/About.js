import React from 'react';
import {
  Text,
  Heading,
  Box,
  Flex,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import ChakraBox from './ChakraBox';
import '../Styles/about.css';

const About = () => {
  const [isGreaterThan900] = useMediaQuery('(min-width: 900px)');
  const bubbles = [
    {
      id: 1,
      image: 'bubbles_1.png',
      zIndex: 18,
      animate: {
        y: [0, -100],
        x: [0, 50],
        rotate: 10,
      },
    },
    {
      id: 2,
      image: 'bubbles_2.png',
      zIndex: 17,
      animate: {
        y: [0, -100],
        x: [0, 50],
        rotate: 10,
      },
    },
    {
      id: 3,
      image: 'bubbles_3.png',
      zIndex: 16,
      animate: {
        y: [0, -100],
        x: [0, 50],
        rotate: 10,
      },
    },
  ];

  return (
    <>
      <Flex maxW="960px" mx="auto" id="about" pb={isGreaterThan900 ? 16 : 8}>
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
          <Flex
            direction="column"
            align="start"
            justify="center"
            // wrap={{ base: 'none', lg: 'wrap' }}
          >
            <Box className="bubbleBox" mt={{ base: '-20rem', lg: '-20rem' }}>
              {bubbles &&
                bubbles.map(bubble => (
                  <ChakraBox
                    key={bubble.id}
                    animate={bubble.animate}
                    transition={{
                      duration: 15,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }}
                    className="bubbles"
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
                x: [30, 0, 30],
                rotate: [7, -5, 7],
              }}
              transition={{
                duration: 15,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              zIndex={19}
            >
              <Image
                src="wale_transparent.png"
                alt="illustration of a wale"
                align="center"
                maxW="350px"
                mb={isGreaterThan900 ? '-20rem' : ''}
              />
            </ChakraBox>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default About;
