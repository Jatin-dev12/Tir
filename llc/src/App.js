import React from 'react'
import Main from './main banner/Main'
import Headers from './navbar/Headers'
import Excellence from './excellence/Excellence'
import Services from './services/Services'
import WhatWeDo from './whatwedo/WhatWeDo'
import WhyUs from './whyus/WhyUs'
import Faq from './faq/Faq'
import Blogs from './blogs/Blogs'

function App() {
  return (
    <div className='App'>
      <Headers />
    <Main/>
      <Excellence />
      <WhatWeDo />
      <Blogs />
      <Faq />
      {/* <Services />
      <WhatWeDo />
      <WhyUs /> */}
    </div>
  )
}

export default App