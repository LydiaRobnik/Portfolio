import React from 'react';
import { Grid, GridItem, Heading, Box } from '@chakra-ui/react';

const Contact = () => {
  return (
    <>
      <Box maxW="960px" h="100vh" id="contact">
        <Grid
          templateColumns="repeat(12, 1fr)"
          templateRows="repeat(4, 1fr)"
          gap={2}
          mt={[32]}
        >
          <GridItem colSpan={10} colStart={2} colEnd={12} rowSpan={1}>
            <Heading>Get In Touch</Heading>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
