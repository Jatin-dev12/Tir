import React from "react";
import { Box, Heading, Flex, Center } from "@chakra-ui/react";
import fac from '../cta/fac.png'
import lin from '../cta/link.png'
import ig from '../cta/ig.png'
import twi from '../cta/twi.png'


function Cta() {
  return (
    <section className="Faq cta">
      <Box className="f-box" pb={5}>
        <Heading padding={10} colorPalette="white">
          Get in Touch With Us
        </Heading>
      </Box>

      <Flex justifyContent={"Center"} gap={10} >
      <Box flexBasis="35%" ustifyContent={"Center"} >
        <div className="txt">
          <div>
            <h5>Location</h5>
            <p>
              2208B, Business Central Towers, 22nd Floor, P.O. Box 449769,
              Sheikh Zayed Road, Dubai , United Arab Emirates
            </p>
          </div>
          <div>
            <h5>Email ID</h5>
            <p>You can also email us at email@gmail.com</p>
          </div>
          <div className="logos">
            <img src={fac} alt=""/>
            <img src={lin} alt=""/>
            <img src={ig} alt=""/>
            <img src={twi} alt=""/>

          </div>
        </div>
</Box>
<Box flexBasis="45%" >

        <div className="cf">
          <div className="cntct">
            <section class="contact-section">
              <div class="contact-intro">
                <h2 class="contact-title">Contact Form</h2>
              </div>

              <form
                class="contact-form"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_ACCESS_KEY_HERE"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission from Web3Forms"
                />
                <input type="hidden" name="from_name" value="My Website" />

                <div class="form-group-container">
                  <div class="form-group">
                    <label for="name" class="form-label">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      class="form-input"
                      placeholder="Your name"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label for="email" class="form-label">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      class="form-input"
                      placeholder="Your email"
                      type="email"
                    />
                  </div>
                  <div class="form-group">
                    <label for="phone" class="form-label">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      class="form-input"
                      placeholder="+1 (234) 56789"
                      type="text"
                    />
                  </div>
                  <div class="form-group">
                    <label for="message" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-textarea"
                      id="message"
                      name="message"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <button class="form-submit" type="submit">
                  Send Message
                </button>
              </form>
            </section>
          </div>
        </div>
        </Box>
      </Flex>

      <Box></Box>
    </section>
  );
}

export default Cta;
