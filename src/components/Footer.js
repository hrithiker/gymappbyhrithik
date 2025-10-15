import React from "react";
import { Box, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../assets/images/Logo-1.png";
import { faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
        pb="24px"
      >
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      </Stack>
      <Stack>
      <footer>
        <div class="container">
            <div class="footer-content">
                <h3>Contact Us</h3>
                <p>Email: rtc.finalyearproject@gmail.com</p>
                <p>Phone: +91 9142524362 </p>
                <p>Address: Ranchi,Jharkhand</p>
            </div>
            <div class="footer-content">
                <h3>Quick Links</h3>
                 <ul class="list">
                    <li><a href="">Home</a></li>
                    <li><a href="Aboutus">About</a></li>
                    <li><a href="login">login</a></li>
                    {/* <li><a href="">Products</a></li> */}
                    <li><a href="">Contact</a></li>
                 </ul>
            </div>
            <div class="footer-content">
                <h3>Follow Us</h3>
                <ul class="social-icons">
               <li><FontAwesomeIcon icon={faWhatsapp} /></li>
                <li><FontAwesomeIcon icon={faYoutube} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                 {/* <li><a href=""><i class="fab fa-facebook"></i></a></li>
                 <li><a href=""><i class="fab fa-twitter"></i></a></li>
                 <li><a href=""><i class="fab fa-instagram"></i></a></li>
                 <li><a href=""><i class="fab fa-linkedin"></i></a></li> */}
                </ul>
                
                </div>
        </div>
        <div class="bottom-bar">
            <p>&copy; Gym@hr .   All rights reserved</p>
        </div>
    </footer>

      </Stack>
    
    
    </Box>
  );
};

export default Footer;
