import React, { useRef, useState, useEffect } from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Solid version

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visible, setVisible] = useState(false);
  const footerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // Stop observing after visible
        }
      },
      { threshold: 0.2 } // 20% visible triggers animation
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/Aboutus" },
    { name: "Login", path: "/login" },
    { name: "Contact", path: "#contact" }
  ];

  const socialLinks = [
    { icon: faEnvelope, color: "#FF0000", url: "https://mail.google.com/mail/u/0/?fs=1&to=hrithik.choudhary110@gmail.com&tf=cm" },
    { icon: faWhatsapp, color: "#25D366", url: "" },
    { icon: faInstagram, color: "#E4405F", url: "https://www.instagram.com/thehrithiker?igsh=MTNicWs1OXZrZGw2cw%3D%3D&utm_source=ig_contact_invite" },
    { icon: faLinkedin, color: "#0077B5", url: "https://www.linkedin.com/in/hrithik-choudhary-hr/" }
  ];

  return (
    <Box
      component="footer"
      ref={footerRef}
      sx={{
        mt: "80px",
        bgcolor: "#FFF3F4",
        width: "100%",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: "opacity 1s ease-out, transform 1s ease-out"
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <Box
            component="img"
            src={Logo}
            alt="logo"
            sx={{
              width: { xs: "150px", sm: "180px", md: "200px" },
              height: "auto",
              transition: "transform 0.3s ease",
              "&:hover": { transform: "scale(1.05)" }
            }}
          />
        </Box>

        {/* Footer Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" },
            py: 4,
            gap: { xs: 4, md: 6 }
          }}
        >
          {/* Contact Info */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#FF2625",
                mb: 3,
                fontSize: { xs: "1.5rem", md: "1.75rem" }
              }}
            >
              Contact Us
            </Typography>
            <Stack gap={1.5} sx={{ alignItems: { xs: "center", md: "flex-start" } }}>
              <Typography sx={{ color: "#3A1212", fontWeight: 500 }}>📧 rtc.finalyearproject@gmail.com</Typography>
              <Typography sx={{ color: "#3A1212", fontWeight: 500 }}>📱 +91 9142524362</Typography>
              <Typography sx={{ color: "#3A1212", fontWeight: 500 }}>📍 Ranchi, Jharkhand</Typography>
            </Stack>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#FF2625",
                mb: 3,
                fontSize: { xs: "1.5rem", md: "1.75rem" }
              }}
            >
              Quick Links
            </Typography>
            <Stack component="ul" sx={{ listStyle: "none", p: 0, m: 0, gap: 1.5, alignItems: "center" }}>
              {quickLinks.map((link) => (
                <Box
                  component="li"
                  key={link.name}
                  sx={{
                    listStyle: "none",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  <Box
                    component="a"
                    href={link.path}
                    sx={{
                      color: "#3A1212",
                      textDecoration: "none",
                      cursor: "pointer",
                      position: "relative",
                      fontWeight: 500,
                      fontSize: "1.1rem",
                      display: "inline-block",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -2,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 0,
                        height: "2px",
                        backgroundColor: "#FF2625",
                        transition: "width 0.3s ease"
                      },
                      "&:hover": {
                        color: "#FF2625",
                        transform: "translateX(5px)",
                        "&::after": { width: "80%" }
                      }
                    }}
                  >
                    {link.name}
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>

          {/* Social Media */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-end" } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                color: "#FF2625",
                mb: 3,
                fontSize: { xs: "1.5rem", md: "1.75rem" }
              }}
            >
              Follow Us
            </Typography>
            <Stack direction="row" gap={3} justifyContent={{ xs: "center", md: "flex-end" }} sx={{ mb: 3 }}>
              {socialLinks.map((social, index) => (
                <Box
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: 45, md: 50 },
                    height: { xs: 45, md: 50 },
                    borderRadius: "50%",
                    backgroundColor: "white",
                    color: social.color,
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    textDecoration: "none",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                      backgroundColor: social.color,
                      color: "white"
                    }
                  }}
                >
                  <Box sx={{ fontSize: { xs: "1.3rem", md: "1.5rem" } }}>
                    <FontAwesomeIcon icon={social.icon} />
                  </Box>
                </Box>
              ))}
            </Stack>

            <Typography sx={{ color: "#3A1212", fontStyle: "italic", mt: 2, textAlign: { xs: "center", md: "right" } }}>
              Join our fitness community!
            </Typography>
          </Box>
        </Box>

        {/* Bottom Bar */}
        <Box sx={{ backgroundColor: "#FF2625", textAlign: "center", py: 3, mt: 4, borderRadius: "10px 10px 0 0" }}>
          <Typography sx={{ color: "white", fontWeight: 600, fontSize: { xs: "0.9rem", md: "1rem" } }}>
            © {currentYear} Gym@hr. All rights reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
