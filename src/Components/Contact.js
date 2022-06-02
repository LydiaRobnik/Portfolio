import React from 'react';
import { Grid, Text, Heading, Flex, GridItem } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Grid
      templateColumns="repeat(12, 1fr)"
      templateRows="repeat(4, 1fr)"
      gap={2}
      mt={[24]}
      id="contact"
    >
      Contact
    </Grid>
  );
};

export default Contact;
