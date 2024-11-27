import React from 'react'
import Headers from './navbar/Headers'
import Excellence from './excellence/Excellence'
import Services from './services/Services'
import WhatWeDo from './whatwedo/WhatWeDo'
import WhyUs from './whyus/WhyUs'

function App() {
  return (
    <div className='App'>
      <Headers />
      <Excellence />
      <Services />
      <WhatWeDo />
      <WhyUs />
    </div>
  )
}

export default App