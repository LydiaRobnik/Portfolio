import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Flex, Button, IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState('none');

  const navigation = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Skills', path: 'skills' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleClick = () => {
    setIsOpen(isOpen === 'none' ? 'block' : 'none');
  };

  return (
    <>
      <nav>
        {/* navbar screen size > lg */}
        <Flex pos="fixed" top="1rem" right="1rem" align="center">
          <Flex display={['none', 'none', 'flex', 'flex']}>
            {navigation.map(nav => (
              <Link
                smooth={true}
                duration={1200}
                offset={-110}
                spy={true}
                hashSpy={true}
                activeClass="active"
                key={nav.name}
                to={nav.path}
              >
                <Button
                  variant="ghost"
                  aria-label={nav.name}
                  aria-current={nav.current ? `${nav.name}` : undefined}
                  mt={5}
                  mb={1}
                  w="100%"
                >
                  {nav.name}
                </Button>
              </Link>
            ))}
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mx={2}
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
              <Link
                smooth={true}
                duration={1200}
                offset={-100}
                spy={true}
                hashSpy={true}
                activeClass="active"
                key={nav.name}
                to={nav.path}
              >
                <Button
                  variant="ghost"
                  aria-label={nav.name}
                  aria-current={nav.current ? `${nav.name}` : undefined}
                  my={5}
                  w="100%"
                  onClick={() => {
                    handleClick();
                  }}
                >
                  {nav.name}
                </Button>
              </Link>
            ))}
          </Flex>
        </Flex>
      </nav>
    </>
  );
};

export default Navbar;
