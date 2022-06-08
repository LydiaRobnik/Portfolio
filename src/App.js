import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
// styling chakra-UI
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
