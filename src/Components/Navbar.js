import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState('none');

  const handleClick = () => {
    setIsOpen(isOpen === 'none' ? 'block' : 'none');
  };

  return (
    <>
      <nav>
        {/* navbar screen size > lg */}
        <Flex pos="fixed" top="1rem" right="1rem" align="center">
          <Flex display={['none', 'none', 'flex', 'flex']}>
            <NavLink to="/">
              <Button
                as="a"
                variant="ghost"
                aria-lable="Home"
                my={5}
                w="100%"
                cursor="pointer"
              >
                Home
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button as="a" variant="ghost" aria-lable="About" my={5} w="100%">
                About
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button
                as="a"
                variant="ghost"
                aria-lable="Contact"
                my={5}
                w="100%"
              >
                Contact
              </Button>
            </NavLink>
          </Flex>
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={['flex', 'flex', 'none', 'none']}
            onClick={handleClick}
          />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        {/* mobile menue, screen size < lg */}
        <Flex
          w="100vw"
          bgColor="gray.50"
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflow="auto"
          direction="column"
          display={isOpen}
        >
          <Flex justify="flex-end">
            <IconButton
              aria-label="Close Menu"
              size="lg"
              mt={2}
              mr={2}
              icon={<CloseIcon />}
              onClick={handleClick}
            />
          </Flex>

          <Flex direction="column" align="center">
            <NavLink to="/">
              <Button as="a" variant="ghost" aria-lable="Home" my={5} w="100%">
                Home
              </Button>
            </NavLink>
            <NavLink to="/about">
              <Button as="a" variant="ghost" aria-lable="About" my={5} w="100%">
                About
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button
                as="a"
                variant="ghost"
                aria-lable="Contact"
                my={5}
                w="100%"
              >
                Contact
              </Button>
            </NavLink>
          </Flex>
        </Flex>
      </nav>
    </>
  );
};

export default Navbar;
