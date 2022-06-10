import React from 'react';
import {
  Grid,
  GridItem,
  Heading,
  Box,
  Text,
  IconButton,
  ButtonGroup,
  Link,
  Flex,
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
      <Box maxW="960px" h="60vh" id="contact" mx={6}>
        {/* <Grid
          templateColumns="repeat(12, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap={2}
          mt={[32]}
        > */}
        {/* <GridItem colSpan={10} colStart={2} colEnd={12} rowSpan={1}> */}
        <Heading as="h2" size="2xl">
          Get In Touch
        </Heading>
        {/* </GridItem> */}
        {/* <GridItem colSpan={10} colStart={2} colEnd={12} rowSpan={1}> */}
        <Text py={1} mt={12}>
          Dropping a line to say "hello", get connected on social media or see
          if we can build something amazing together? I’d love to hear from you!
        </Text>
        {/* </GridItem> */}
        {/* <GridItem colSpan={10} colStart={3} colEnd={10} rowSpan={1}> */}
        <Flex justify="center">
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
        {/* </GridItem> */}
        {/* <GridItem colSpan={10} colStart={2} colEnd={12} rowSpan={1}>
            <Text my={10} fontSize="xs">
              Lydia Robnik - Friedrichstr. 59 - 68809 Neulußheim
            </Text>
          </GridItem> */}
        {/* </Grid> */}
      </Box>
    </>
  );
};

export default Contact;
