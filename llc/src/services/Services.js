import React from 'react'
import arrow from './Vector (12).png'
import { Flex } from '@chakra-ui/react'
function Services() {
  return (
    <Flex direction="column">
          <div style={{backgroundColor:"black"}}>
      <h1 style={{color:"white", fontSize: "35px", marginBottom: "10px"}}>
      Our Services
      </h1>
      <p style={{color:"white", fontSize: "15px"}}>
Lorem ipsum dolor sit amet consectetur adipiscing elit, rhoncus vitae velit interdum gravida dictumst
<br />sollicitudin fusce
ornare curae quam turpis montes enim.</p>
    </div>
<div className="div-containers">
  <div className="div-items">
    <div className="hover-container" style={{ border: "1px solid white", height: "50px", width: "552px", borderRadius: "6px" }}>
      <span className="hover-text" style={{ display: "flex", flexDirection: "flex-start" }}>For Business</span>
    </div>
    <h1 className="item-title">For Business</h1>
    <p className="item-description" style={{ color: "white" }}>
      Lorem ipsum dolor sit amet consectetur asgdjasdgakj, <br />aenean natoque etiam lacus ligula arcu dignissim cum
    </p>
    <button className="know-mores" style={{ color: "white" }}>
      Explore More
      <img src={arrow} className="arrows" />
    </button>
  </div>

  <div className="div-items">
    <div className="hover-container" style={{ border: "1px solid white", height: "50px", width: "552px" }}>
      <span className="hover-text" style={{ display: "flex", flexDirection: "flex-start" }}>For Investors</span>
    </div>
    <h1 className="item-title">For Investors</h1>
    <p className="item-description" style={{ color: "white" }}>
      Lorem ipsum dolor sit amet consectetur asgdjasdgakj, <br />aenean natoque etiam lacus ligula arcu dignissim cum
    </p>
    <button className="know-mores" style={{ color: "white" }}>
      Join Us
      <img src={arrow} className="arrows" />
    </button>
  </div>
</div>
</Flex>
)
}

export default Services