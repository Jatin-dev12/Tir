import React from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';

const WhatWeDo = () => {
  return (
    <Box position="relative" height="100vh" width="100%">
      {/* Full background video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content centered over the video */}
      <Flex
        direction="column"
        justify="flex-start"  // Aligns content to the top
        align="center"
        height="100%"
        textAlign="center"
        color="white"
        px={5}
        pb={50}
      >
        <Heading as="h1" size="3xl" mb={4} mt={12}>
          How We Turn Ideas Into Reality?
        </Heading>
        <Text fontSize="xl" maxW="600px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Flex>
    </Box>
  );
};

export default WhatWeDo;
