import React from 'react';
import { Box, Text, Heading, Flex } from '@chakra-ui/react';
import wht from '../whatwedo/wtht.mp4'

const WhatWeDo = () => {
  return (
    <section className='whtwedo'>
      {/* Full background video */}

      {/* Content centered over the video */}
      <Flex
        direction="column"
        justify="flex-start"  // Aligns content to the top
        align="center"
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
      <video
      src={wht}
        autoPlay
        loop
        muted
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',


        }}
      >

      </video>

    </section>
  );
};

export default WhatWeDo;
