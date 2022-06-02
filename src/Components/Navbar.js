import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Flex, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState('none');
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsOpen(isOpen === 'none' ? 'block' : 'none');
  };

  const navigation = [
    { name: 'Home', path: '/#', current: false },
    { name: 'About', path: '/#about', current: false },
    { name: 'Projects', path: '/#projects', current: false },
    { name: 'Contact', path: '/#contact', current: false },
  ];

  return (
    <>
      <nav>
        {/* navbar screen size > lg */}
        <Flex pos="fixed" top="1rem" right="1rem" align="center">
          <Flex display={['none', 'none', 'flex', 'flex']}>
            {navigation.map(nav => (
              <NavHashLink smooth key={nav.name} to={nav.path}>
                <Button
                  variant={nav.current ? 'outline' : 'ghost'}
                  aria-label={nav.name}
                  aria-current={nav.current ? `${nav.name}` : undefined}
                  my={5}
                  w="100%"
                >
                  {nav.name}
                </Button>
              </NavHashLink>
            ))}
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon />}
            display={['flex', 'flex', 'none', 'none']}
            onClick={handleClick}
          />
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
            {navigation.map(nav => (
              <NavHashLink smooth key={nav.name} to={nav.path}>
                <Button
                  variant={nav.current ? 'outline' : 'ghost'}
                  aria-label={nav.name}
                  aria-current={nav.current ? `${nav.name}` : undefined}
                  my={5}
                  w="100%"
                  onClick={handleClick}
                >
                  {nav.name}
                </Button>
              </NavHashLink>
            ))}
          </Flex>
        </Flex>
      </nav>
    </>
  );
};

export default Navbar;
