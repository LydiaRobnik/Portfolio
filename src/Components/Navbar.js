import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Button } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const Navbar = () => {
  return (
    <div>
      <nav>
        <Flex>
          <Flex>
            <NavLink to="/">
              <Button>Home</Button>
            </NavLink>
            <NavLink to="/about">
              <Button>About</Button>
            </NavLink>
            <NavLink to="/contact">
              <Button>Contact</Button>
            </NavLink>
          </Flex>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
      </nav>
    </div>
  );
};

export default Navbar;
