import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stack, Box, IconButton, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useAuth0 } from "@auth0/auth0-react";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Exercises", path: "#exercises", isExternal: true },
    { name: "About", path: "/Aboutus" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const AuthButton = () => (
    <Box>
      {isAuthenticated ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ color: "#FF2625", fontWeight: "600", fontSize: "16px" }}>
            Hi, {user?.name}
          </Typography>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            style={{
              backgroundColor: "#FF2625",
              color: "white",
              border: "none",
              padding: "8px 20px",
              borderRadius: "20px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#e02020";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#FF2625";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Logout
          </button>
        </Box>
      ) : (
        <button
          onClick={() => loginWithRedirect()}
          style={{
            backgroundColor: "white",
            color: "#3A1212",
            border: "2px solid #FF2625",
            padding: "8px 20px",
            borderRadius: "20px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#FF2625";
            e.target.style.color = "white";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#3A1212";
            e.target.style.transform = "translateY(0)";
          }}
        >
          Login
        </button>
      )}
    </Box>
  );

  return (
    <>
      {/* Desktop Navbar */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: { xs: 2, sm: 4, md: 6 }, py: 2, maxWidth: "1200px", margin: "0 auto" }}
      >
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "48px", height: "48px", transition: "transform 0.3s ease" }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        </Link>

        {/* Desktop Navigation */}
        <Stack direction="row" gap="40px" alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
          {navItems.map((item) => (
            <Box
              key={item.name}
              sx={{
                "& a": {
                  textDecoration: "none",
                  color: "#3A1212",
                  fontWeight: "600",
                  fontSize: "20px",
                  padding: "8px 16px",
                  transition: "all 0.3s ease",
                  display: "block",
                },
                "& a:hover": {
                  color: "#FF2625",
                },
              }}
            >
              {item.isExternal ? (
                <a href={item.path}>{item.name}</a>
              ) : (
                <Link to={item.path}>{item.name}</Link>
              )}
            </Box>
          ))}
          <AuthButton />
        </Stack>

        {/* Mobile Menu Button */}
        <IconButton sx={{ display: { md: "none" }, color: "#FF2625" }} onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
      </Stack>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "280px",
            backgroundColor: "#FFFAFB",
            padding: 2,
          },
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img src={Logo} alt="logo" style={{ width: "48px", height: "48px" }} />
            </Link>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Stack gap={2} sx={{ mb: 4 }}>
            {navItems.map((item) => (
              <Box
                key={item.name}
                sx={{
                  "& a": {
                    textDecoration: "none",
                    color: "#3A1212",
                    fontWeight: "600",
                    fontSize: "18px",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    transition: "all 0.3s ease",
                    display: "block",
                  },
                  "& a:hover": {
                    color: "#FF2625",
                    backgroundColor: "#FFF3F4",
                  },
                }}
              >
                {item.isExternal ? (
                  <a href={item.path} onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.path} onClick={() => setMobileOpen(false)}>
                    {item.name}
                  </Link>
                )}
              </Box>
            ))}
          </Stack>

          <AuthButton />
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
