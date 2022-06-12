import React from 'react';
import {
  Heading,
  Text,
  IconButton,
  ButtonGroup,
  Link,
  Flex,
  Box,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedinIn, FaGithub, FaDiscord } from 'react-icons/fa';

const Contact = () => {
  const contactOptions = [
    {
      option: 'Email',
      icon: <EmailIcon />,
      href: 'mailto:lydiarobnik@gmail.com',
      aria: 'send email',
    },
    {
      option: 'LinkedIn',
      reactIcon: FaLinkedinIn,
      href: 'https://www.linkedin.com/in/lydiarobnik/',
      aria: 'view LinkedIn profile',
    },
    {
      option: 'GitHub',
      reactIcon: FaGithub,
      href: 'https://www.github.com/LydiaRobnik',
      aria: 'view GitHub profile',
    },
    {
      option: 'Discord',
      reactIcon: FaDiscord,
      href: 'https://discordapp.com/users/982315750628950017',
      aria: 'view Discord profile',
    },
  ];

  return (
    <>
      <Flex
        maxW="960px"
        h="80vh"
        id="contact"
        mx="auto"
        direction="column"
        align="center"
        justify="center"
      >
        <Box mx={6}>
          <Heading as="h2" size="2xl">
            Get In Touch
          </Heading>

          <Text py={1} mt={12}>
            Dropping a line to say "hello", get connected on social media or see
            if we can build something amazing together? I’d love to hear from
            you!
          </Text>

          <Flex justify="start">
            <ButtonGroup spacing="16px" my={20}>
              {contactOptions.map(option => (
                <Link href={option.href} isExternal>
                  <IconButton
                    variant="outline"
                    colorScheme="teal"
                    key={option.option}
                    aria-label={option.aria}
                    icon={option.icon}
                    as={option.reactIcon}
                    p={2}
                    cursor="pointer"
                  ></IconButton>
                </Link>
              ))}
            </ButtonGroup>
          </Flex>
          <Flex justify="start">
            <Text my={10} fontSize="xs">
              Lydia Robnik - Friedrichstr. 59 - 68809 Neulußheim
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
