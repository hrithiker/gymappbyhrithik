import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("current User", user);

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "90px", xs: "28px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="10px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px " }}
        />
      </Link>

      <Stack direction="row" gap="30px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>

        <Link
          to="/Aboutus"
          className="about-section"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            // borderBottom: "3px solid #FF2625",
          }}
        >
          About
        </Link>
        {/* <button */}
        <Link    className="display-name">
                {isAuthenticated && <h4> { user.name}</h4>}
                {isAuthenticated ? (
            <button
            className="logout-section"
            style={{
              textDecoration: "none",
              backgroundColor: "white",
              color: "#3A1212",
              fontSize: "22px",
              border: "none",
            }}
              onClick={(e) => logout()}> logout </button>
          ) : (
            <button
              className="login-section"
              style={{
                textDecoration: "none",
                backgroundColor: "white",
                color: "#3A1212",
                fontSize: "22px",
                border: "none",
                // borderBottom: "3px solid #FF2625",
                // paddingRight: "20px",
              }}
              onClick={() => loginWithRedirect()}
            >
              login
            </button>
          )}
        </Link>

        {/* <Link>abiout</Link>

          <Link style={{
          }}
          
          >abiout</Link> */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
