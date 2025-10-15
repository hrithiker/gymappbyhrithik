import React, { useRef } from "react";
import { Box, Typography } from "@mui/material";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyPart, onCardClick }) => {
  const scrollRef = useRef(null);

  if (!data || data.length === 0) {
    return (
      <Typography textAlign="center" color="#FF2625" p={3}>
        No items to display
      </Typography>
    );
  }

  // Drag to scroll
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
      {/* Left Arrow */}
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

      {/* Right Arrow */}
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
        {data.map((item, index) => (
          <Box
            key={item.id || `${item}-${index}`} // unique key
            sx={{
              minWidth: { xs: "120px", sm: "150px", md: "200px" },
              m: { xs: "0 10px", sm: "0 20px", md: "0 40px" },
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => {
              if (!isBodyPart && onCardClick) {
                onCardClick(item.id); // navigate to exercise detail
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else if (isBodyPart && setBodyPart) {
                setBodyPart(item);
              }
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
