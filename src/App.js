import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Aboutus from "./components/Aboutus";
import login from "./components/login";

const App = () => {
  // const { user, loginWithRedirect } = useAuth0();
  // console.log("current User", user);

  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="Aboutus" element={<Aboutus />} />
        {/* <Route path="login" element={<login />} /> */}
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
