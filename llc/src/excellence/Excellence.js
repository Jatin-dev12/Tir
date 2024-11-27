import React, { useState } from "react";
import "../App.css";
import { Button, Flex, Box, Heading } from "@chakra-ui/react";
import plus from "./Goal-btn.png";

const Excellence = () => {
  return (
    <section className="section-2 exllence">
      <Box>
        <Heading padding={10} colorPalette="white">
          Sphere of Excellence
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur. Id mattis placerat congue nam<br />
          Enim nunc vulputate in nunc risus aliquet mattis quisque.
        </p>
      </Box>
      <Flex align="bottom" gap={5} p={2} justifyContent={"center"} pt={10}>
        <div className="items">
          <div className="inner-itmes">
            <h5>Technology</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Id<br /> mattis placerat conguenam. Enim nunc <br />vulputate in nunc risus aliquet mattis quisque.
            </p>
          </div>

          <div className="inner-itmes">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="items">
          <div className="inner-itmes">

            <h5>Strategy & Business Development</h5>
            <p>
            Lorem ipsum dolor sit amet consectetur.<br /> Id mattis placerat congue nam. Enim nunc<br /> vulputate in nunc risus aliquet mattis.
            </p>
          </div>

          <div className="inner-itmes">
            <img src={plus} alt="" />
          </div>
        </div>
      </Flex>
      <Flex align="bottom" gap={5} p={2} justifyContent={"center"} >
        <div className="items">
          <div className="inner-itmes">
            <h5>Technology</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Id<br /> mattis placerat conguenam. Enim nunc <br />vulputate in nunc risus aliquet mattis quisque.
            </p>
          </div>

          <div className="inner-itmes">
            <img src={plus} alt="" />
          </div>
        </div>
        <div className="items">
          <div className="inner-itmes">

            <h5>Strategy & Business Development</h5>
            <p>
            Lorem ipsum dolor sit amet consectetur.<br /> Id mattis placerat congue nam. Enim nunc<br /> vulputate in nunc risus aliquet mattis.
            </p>
          </div>

          <div className="inner-itmes">
            <img src={plus} alt="" />
          </div>
        </div>
      </Flex>
    </section>
  );
};

export default Excellence;
