import React from "react";
import arrow from "./Vector (12).png";
import { Flex, Box, Heading, Button } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Services() {
  return (
    <section className="our-ser">
      <Box className="f-box">
        <Heading padding={10} colorPalette="white">
        Our Services
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur. Id mattis placerat congue nam
          <br />
          Enim nunc vulputate in nunc risus aliquet mattis quisque.
        </p>
      </Box>

      <Flex align="center" justify={"center"} pt={10} gap={10}>
        <div className="tb">
          <div className="t-box">
            <h5>For Business</h5>

            <div className="broder">
              <p>
                Lorem ipsum dolor sit amet consectetur. Id mattis
                <br /> placerat congue nam. Enim nunc vulputate in nunc
                <br /> risus aliquet mattis quisque.
              </p>
            </div>
          </div>
          <div className="t-box">
            <Button variant="outline">
              Explore more <MdKeyboardArrowRight />
            </Button>{" "}
          </div>
        </div>

        <div className="tb">
          <div className="t-box">
            <h5>For Investors</h5>
            <div className="broder">
              <p>
                Lorem ipsum dolor sit amet consectetur. Id mattis
                <br /> placerat congue nam. Enim nunc vulputate in nunc
                <br /> risus aliquet mattis quisque.
              </p>
            </div>
          </div>
          <div className="t-box">
            <Button variant="outline">
            Join Us <MdKeyboardArrowRight />
            </Button>{" "}
          </div>
        </div>
      </Flex>
    </section>
  );
}

export default Services;
