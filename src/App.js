import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";

const App = () => {
  return (
    // FIXED: Remove fixed width and use responsive container
    <Box width="100%" maxWidth="1488px" m="auto" px={{ xs: 2, sm: 3, md: 4 }}>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </Box>
  );
};

export default App;