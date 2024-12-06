import React from 'react'
import { Box ,Flex } from "@chakra-ui/react";
import ft from '../footer/Foter-logo.png'
import facbook from '../footer/facb.png';

import insta from '../footer/insta.png';

import din from '../footer/din.png';

import twe from '../footer/twiter.png';


function Footer() {
  return (
    <section className='footer'>

<Box p={8}>
<Flex align="center" justify="space-between" gap={10} paddingInline={10}>
        <div className='logo'>
        <img src={ft} alt="Logo" />
        </div>


        <div className='lins'>

        <ul>
          <li style={{ color: 'white'}}>About</li>
          <li style={{ color: 'white'}}>Services</li>
          <li style={{ color: 'white'}}>Portfolio</li>
          <li style={{ color: 'white'}}>Blogs</li>
          <li style={{ color: 'white'}}>Contact</li>

        </ul>

        </div>

<div className='social'>

  <img src={facbook}  alt=''/>
  <img src={din}  alt=''/>

  <img src={twe}  alt=''/>

  <img src={insta}  alt=''/>

  </div>

      </Flex>
      </Box>
      <div className='cpy'>
        <p>© 2024  Untitled. All rights reserved</p>
      </div>

    </section>
  )
}

export default Footer