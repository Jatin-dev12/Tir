// // import React from 'react'
// // import Main from './main banner/Main'
// // import Headers from './navbar/Headers'
// // import Excellence from './excellence/Excellence'
// // import Services from './services/Services'
// // import WhatWeDo from './whatwedo/WhatWeDo'
// // import WhyUs from './whyus/WhyUs'
// // import Faq from './faq/Faq'
// // import Cta from './cta/Cta'
// // import Footer from './footer/Footer'
// // import "@fontsource/poppins";
// // import Blogs from './blogs/Blogs'

// // function App() {
// //   return (
// //     <div className='App'>
// //       <Headers />
// //     <Main/>
// //       <Excellence />

// //     <Services />

// //       <WhatWeDo />
// //       <WhyUs/>
// //     <Faq />
// //     <Blogs />
// //     <Cta/>
// //     <Footer/>

// //     </div>
// //   )
// // }

// // export default App

// import React from "react";
// import AnimatedCursor from "react-animated-cursor"

// export default function App() {
//   return (
//     <div className="App">
// <AnimatedCursor
//   innerSize={8}
//   outerSize={35}
//   innerScale={1}
//   outerScale={2}
//   outerAlpha={0}
//   hasBlendMode={true}
//   innerStyle={{
//     backgroundColor: 'var(--cursor-color)'
//   }}
//   outerStyle={{
//     border: '3px solid var(--cursor-color)'
//   }}
// />
//     <h1>ajsdgasgdjasgdjasgdjasdjh</h1>
//     </div>
//   );
// }


import { React, useState, useEffect } from 'react'
import DemoContent from './DemoContent'
import DemoCustomTest from './DemoCustomTest'
import DemoHeader from './DemoHeader'
import DemoFooter from './DemoFooter'
import './demo-styles.css'
import AnimatedCursor from 'react-animated-cursor'

export default function App() {
  const [state, setState] = useState('donut')
  const searchParams = new URLSearchParams(document.location.search)
  const cursorParam = searchParams.get('cursor')

  useEffect(() => {
    if (cursorParam) setState(cursorParam)
  }, [cursorParam])

  return (
    <div>
      {state === 'default' && <AnimatedCursor />}
      {state === 'donut' && (
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          showSystemCursor={false}
          hasBlendMode={true}
          outerStyle={{
            border: '3px solid var(--cursor-color)'
          }}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)'
          }}
        />
      )}
      {state === 'blendmode' && (
        <AnimatedCursor
          color="255,255,255"
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={1}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: 'exclusion'
          }}
          innerStyle={{
            backgroundColor: 'var(--cursor-color)',
            mixBlendMode: 'exclusion'
          }}
        />
      )}
      {state === 'custom' && (
        <AnimatedCursor
          clickables={[
            {
              target: '.small',
              innerScale: 3,
              outerScale: 1
            },
            {
              target: '.big',
              innerScale: 9,
              outerScale: 7
            },
            {
              target: '.blue',
              color: 'blue',
              innerStyle: {
                backgroundColor: 'blue'
              },
              outerStyle: {
                backgroundColor: 'rgb(0,0,255,0.4)'
              }
            },
            {
              target: '#blueDonut',
              innerSize: 8,
              outerSize: 35,
              innerScale: 1,
              outerScale: 2,
              outerAlpha: 0,
              showSystemCursor: true,
              hasBlendMode: true,
              outerStyle: {
                border: '3px solid blue'
              },
              innerStyle: {
                backgroundColor: 'blue'
              }
            },
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link'
          ]}
          color={'220, 90, 90'}
          innerScale={0.6}
          innerSize={8}
          outerAlpha={0.4}
          outerScale={6}
          outerSize={8}
          showSystemCursor={false}
          trailingSpeed={8}
        />
      )}
      <DemoHeader />
      <DemoContent />
      {state === 'custom' && <DemoCustomTest />}
      <DemoFooter />
    </div>
  )
}