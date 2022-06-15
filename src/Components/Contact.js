import React from 'react';
import {
  Heading,
  Text,
  IconButton,
  ButtonGroup,
  Link,
  Flex,
  Box,
  Button,
} from '@chakra-ui/react';
import Obfuscate from 'react-obfuscate';

// Icons
import { EmailIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faGithub,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const contactOptions = [
    {
      option: 'LinkedIn',
      reactIcon: faLinkedinIn,
      href: 'https://www.linkedin.com/in/lydiarobnik/',
      aria: 'view LinkedIn profile',
    },
    {
      option: 'GitHub',
      reactIcon: faGithub,
      href: 'https://www.github.com/LydiaRobnik',
      aria: 'view GitHub profile',
    },
    {
      option: 'Discord',
      reactIcon: faDiscord,
      href: 'https://discordapp.com/users/982315750628950017',
      aria: 'view Discord profile',
    },
  ];

  return (
    <>
      <Flex
        maxW="960px"
        // h="80vh"
        mx="auto"
        id="contact"
        direction="column"
        align="center"
        justify="center"
      >
        <Box w="100%" px={6} pt={16}>
          <Heading as="h2" size="2xl">
            Get In Touch
          </Heading>
          <Box>
            <Text py={1} mt={6} maxW="820px">
              Dropping a line to say "hello", get connected on social media or
              see if we can build something amazing together? I’d love to hear
              from you!
            </Text>

            <Flex justify="start">
              <ButtonGroup spacing="16px" my={12}>
                <Obfuscate
                  email="lydiarobnik@gmail.com"
                  headers={{ subject: 'Nice portfolio', body: 'Hi Lydia, ...' }}
                >
                  <IconButton
                    variant="outline"
                    colorScheme="cyan"
                    aria-label="send email"
                    icon={<EmailIcon />}
                    p={2}
                    cursor="pointer"
                  />
                </Obfuscate>
                {contactOptions.map(option => (
                  <Link key={option.option} href={option.href} isExternal>
                    <Button
                      variant="outline"
                      aria-label={option.aria}
                      p={2}
                      cursor="pointer"
                      colorScheme="cyan"
                    >
                      <FontAwesomeIcon icon={option.reactIcon} size="lg" />
                    </Button>
                  </Link>
                ))}
              </ButtonGroup>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
