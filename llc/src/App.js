import React from 'react'
import Main from './main banner/Main'
import Headers from './navbar/Headers'
import Excellence from './excellence/Excellence'
import Services from './services/Services'
import WhatWeDo from './whatwedo/WhatWeDo'
import WhyUs from './whyus/WhyUs'
import Faq from './faq/Faq'
import Cta from './cta/Cta'
import Footer from './footer/Footer'
import "@fontsource/poppins";

function App() {
  return (
    <div className='App'>
      <Headers />
    <Main/>
      <Excellence />

    <Services />

      <WhatWeDo />
      <WhyUs/>
    <Faq />
    <Cta/>
    <Footer/>

    </div>
  )
}

export default App