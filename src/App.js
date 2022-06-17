import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Project from './Components/Project';
// styling chakra-UI
import theme from './theme';
import './Styles/App.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="projects/:name" element={<Project />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
