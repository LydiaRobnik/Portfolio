import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

// components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Toolbox from './Components/Toolbox';
import Contact from './Components/Contact';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes> */}
      <Home />
      <About />
      <Toolbox />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
