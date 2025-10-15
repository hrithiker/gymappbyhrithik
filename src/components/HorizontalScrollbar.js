import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  const scrollRef = useRef(null);

  if (!data || data.length === 0) {
    return (
      <Typography textAlign="center" color="#FF2625" p={3}>
        No items to display
      </Typography>
    );
  }

  // Drag to scroll (desktop & mobile)
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX || e.touches[0].pageX;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const scrollBy = (distance) => {
    scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Desktop Arrows */}
      <Box
        onClick={() => scrollBy(-200)}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          display: { xs: "none", sm: "flex" },
          width: 40,
          height: 40,
          bgcolor: "rgba(255,255,255,0.7)",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <img src={LeftArrowIcon} alt="left" style={{ width: "60%", height: "60%" }} />
      </Box>

      <Box
        onClick={() => scrollBy(200)}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          display: { xs: "none", sm: "flex" },
          width: 40,
          height: 40,
          bgcolor: "rgba(255,255,255,0.7)",
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        <img src={RightArrowIcon} alt="right" style={{ width: "60%", height: "60%" }} />
      </Box>

      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          cursor: "grab",
          p: 1,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {data.map((item) => (
          <Box
            key={item.id || item}
            sx={{
              minWidth: { xs: "120px", sm: "150px", md: "200px" },
              m: { xs: "0 10px", sm: "0 20px", md: "0 40px" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            {isBodyPart ? (
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HorizontalScrollbar;
