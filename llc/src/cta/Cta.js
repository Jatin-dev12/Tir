// // import React from "react";
// // import { Box, Heading, Flex, Center } from "@chakra-ui/react";
// // import fac from '../cta/fac.png'
// // import lin from '../cta/link.png'
// // import ig from '../cta/ig.png'
// // import twi from '../cta/twi.png'


// // function Cta() {
// //   return (
// //     <section className="Faq cta">
// //       <Box className="f-box" pb={5}>
// //         <Heading padding={10} colorPalette="white">
// //           Get in Touch With Us
// //         </Heading>
// //       </Box>

// //       <Flex justifyContent={"Center"} gap={10} >
// //       <Box flexBasis="35%" ustifyContent={"Center"} >
// //         <div className="txt">
// //           <div>
// //             <h5>Location</h5>
// //             <p>
// //               2208B, Business Central Towers, 22nd Floor, P.O. Box 449769,
// //               Sheikh Zayed Road, Dubai , United Arab Emirates
// //             </p>
// //           </div>
// //           <div>
// //             <h5>Email ID</h5>
// //             <p>You can also email us at email@gmail.com</p>
// //           </div>
// //           <div className="logos">
// //             <img src={fac} alt=""/>
// //             <img src={lin} alt=""/>
// //             <img src={ig} alt=""/>
// //             <img src={twi} alt=""/>

// //           </div>
// //         </div>
// // </Box>
// // <Box flexBasis="45%" >

// //         <div className="cf">
// //           <div className="cntct">
// //             <section class="contact-section">
// //               <div class="contact-intro">
// //                 <h2 class="contact-title">Contact Form</h2>
// //               </div>

// //               <form
// //                 class="contact-form"
// //                 action="https://api.web3forms.com/submit"
// //                 method="POST"
// //               >
// //                 <input
// //                   type="hidden"
// //                   name="access_key"
// //                   value="YOUR_ACCESS_KEY_HERE"
// //                 />
// //                 <input
// //                   type="hidden"
// //                   name="subject"
// //                   value="New Contact Form Submission from Web3Forms"
// //                 />
// //                 <input type="hidden" name="from_name" value="My Website" />

// //                 <div class="form-group-container">
// //                   <div class="form-group">
// //                     <label for="name" class="form-label">
// //                       Name
// //                     </label>
// //                     <input
// //                       id="name"
// //                       name="name"
// //                       class="form-input"
// //                       placeholder="Your name"
// //                       type="text"
// //                     />
// //                   </div>
// //                   <div class="form-group">
// //                     <label for="email" class="form-label">
// //                       Email
// //                     </label>
// //                     <input
// //                       id="email"
// //                       name="email"
// //                       class="form-input"
// //                       placeholder="Your email"
// //                       type="email"
// //                     />
// //                   </div>
// //                   <div class="form-group">
// //                     <label for="phone" class="form-label">
// //                       Phone
// //                     </label>
// //                     <input
// //                       id="phone"
// //                       name="phone"
// //                       class="form-input"
// //                       placeholder="+1 (234) 56789"
// //                       type="text"
// //                     />
// //                   </div>
// //                   <div class="form-group">
// //                     <label for="message" class="form-label">
// //                       Message
// //                     </label>
// //                     <textarea
// //                       class="form-textarea"
// //                       id="message"
// //                       name="message"
// //                       placeholder="Your message"
// //                     ></textarea>
// //                   </div>
// //                 </div>
// //                 <button class="form-submit" type="submit">
// //                   Send Message
// //                 </button>
// //               </form>
// //             </section>
// //           </div>
// //         </div>
// //         </Box>
// //       </Flex>

// //       <Box></Box>
// //     </section>
// //   );
// // }

// // export default Cta;


import React from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import fac from '../cta/fac.png';
import lin from '../cta/link.png';
import ig from '../cta/ig.png';
import twi from '../cta/twi.png';
import { Button } from '@chakra-ui/react';


function Cta() {
  return (
    <section className="Faq cta">
      <Box className="f-box" pb={5}>
        <Heading padding={10} color="white">
          Get in Touch With Us
        </Heading>
      </Box>

      <Flex justifyContent={"Center"} gap={10}>
        <Box flexBasis="35%" justifyContent={"Center"}>
          <div className="txt">
            <div>
              <h5>Location</h5>
              <p>
                2208B, Business Central Towers, 22nd<br />
                Floor, P.O. Box 449769,Sheikh Zayed Road,<br />
                 Dubai, United Arab Emirates
              </p>
            </div>
            <div>
              <h5>Email ID</h5>
              <p>You can also email us at email@gmail.com</p>
            </div>
            <div className="logos">
              <img src={fac} alt="Facebook" />
              <img src={lin} alt="LinkedIn" />
              <img src={ig} alt="Instagram" />
              <img src={twi} alt="Twitter" />
            </div>
          </div>
        </Box>

        <Box flexBasis="45%">
          <div className="cf">
            <div className="cntct">
              <section className="contact-section">
                <div className="contact-intro">
                  <h2 className="contact-title">Contact Form</h2>
                </div>

                <form
                  className="contact-form"
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

                  <div className="form-group-container">
                    <div className="form-group-row">
                      <div className="form-group">
                        <label for="name" className="form-label">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          className="form-input"
                          placeholder="Your name"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label for="email" className="form-label">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          className="form-input"
                          placeholder="Your email"
                          type="email"
                        />
                      </div>
                    </div>

                    {/* Second Row: Phone and Country Dropdowns */}
                    <div className="form-group-row">
                      <div className="form-group">
                        <label for="phone" className="form-label">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          className="form-input"
                          placeholder="+1 (234) 56789"
                          type="text"
                        />
                      </div>
                      <div className="form-group">
                        <label for="country" className="form-label">
                          Country
                        </label>
                        <select
                          id="country"
                          name="country"
                          className="form-input"
                        >
                          <option value="">Select Country</option>
                          <option value="USA">USA</option>
                          <option value="UK">UK</option>
                          <option value="Canada">Canada</option>
                          {/* Add more countries as needed */}
                        </select>
                      </div>
                    </div>
                    <div className="form-group-row">
                      <div className="form-group" >
                        <label for="message" className="form-label">
                          Message
                        </label>
                        <textarea
                          className="form-textarea"
                          id="message"
                          name="message"
                          placeholder="Your message"
                        ></textarea>
                      </div>
                      <div className="form-group" >
                        <Button className="form-submit" type="submit">
                        Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </Box>
      </Flex>
    </section>
  );
}

export default Cta;
