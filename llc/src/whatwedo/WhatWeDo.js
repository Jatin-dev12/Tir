import React from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import video from './18947687-hd_1280_720_30fps.mp4'

const WhatWeDo = () => {
  return (
    <Box position="relative" height="100vh" width="100%">
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
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Flex
        direction="column"
        justify="flex-start" 
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
