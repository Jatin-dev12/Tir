import React from "react";
import logos from "./Frame 208 (1).png";
import "../App.css";
import { Box, Flex, Button } from "@chakra-ui/react";

function Headers() {
  return (
    <section className="navbar">
      <Box p={8}>
        <Flex
          align="center"
          justify="space-between"
          gap={10}
          paddingInline={10}
        >
          <div className="logo">
            <img src={logos} alt="Logo" />
          </div>

          <div className="lins">
            <div>
              <ul>
                <li style={{ color: "white" }}>Home</li>
                <li style={{ color: "white" }}>Portfolio</li>
                <li style={{ color: "white" }}>Blogs</li>
                <li style={{ color: "white" }}>About Us</li>
              </ul>
            </div>
            <Button colorPalette={"orange"}
              style={{
                paddingTop: "10px",
                paddingRight: "16px",
                paddingBottom: "10px",
                paddingLeft: "16px",

              }}
            >
              Contact Us
            </Button>
          </div>
        </Flex>
      </Box>
    </section>
  );
}

export default Headers;
