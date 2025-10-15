import React from "react";
import { Typography, Box } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: 10, xs: 4 }, px: { xs: 2, sm: 3, md: 0 } }}>
      {/* Target Muscle Exercises */}
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          mb: 4,
          textAlign: { xs: "center", md: "left" },
        }}
        fontWeight={700}
        color="#000"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Target Muscle
        </span>{" "}
        exercises
      </Typography>

      <Box sx={{ position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Box>

      {/* Equipment Exercises */}
      <Typography
        sx={{
          fontSize: { lg: "44px", xs: "25px" },
          mt: { lg: 10, xs: 6 },
          mb: 4,
          textAlign: { xs: "center", md: "left" },
        }}
        fontWeight={700}
        color="#000"
      >
        Similar{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          Equipment
        </span>{" "}
        exercises
      </Typography>

      <Box sx={{ position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default SimilarExercises;
