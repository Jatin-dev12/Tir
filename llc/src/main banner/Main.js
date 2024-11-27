import React from "react";
import { Button, Flex ,Box ,Heading } from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";

function Main() {
  return (
    <main className="bnerr">
    <section className="main-baner">

        <Flex align="center" justify="space-around" gap={10} className="flting-btn">
        <div className="flt-btn">
          <Button className="att">Attribute</Button>
        </div>
        <div className="flt-btn sec">
          <Button className="att">Attribute</Button>
        </div>
          <div className="flt-btn sec">
          <Button className="att">Attribute</Button>
        </div>
        </Flex>

<Box>
<Heading padding={10}  colorPalette="white">Empowering Companies to <span className="lall">Escalate</span> <br />your Business to Global Levels.</Heading>
<p> We are your guiding light on the path of success. From connecting you with valuable resources to <br />providing expert mentorship, we are dedicated to supporting your journey of growth across UAE.</p>
</Box>

<Box >

          <Flex gap={5} align="center" justify="center" p={10} >

            <div className="col-md-6 align-bottom">
              <div>
                <Button colorPalette={"orange"}>Start Today</Button>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <Button variant="outline">
                  Know More <MdKeyboardArrowRight />
                </Button>
              </div>
            </div>
          </Flex>

          </Box>

    </section>
    </main>
  );
}

export default Main;
