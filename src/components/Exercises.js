import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utilts/fetchData";
import ExerciseCard from "./ExerciseCard";
// import Loader from "./Loader";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  // console.log(exercises);

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      // Check if we already have cached data for this bodyPart
      const cachedData = localStorage.getItem(`exercises_${bodyPart}`);

      if (cachedData) {
        console.log(`Loaded ${bodyPart} from cache`);
        setExercises(JSON.parse(cachedData));
        return; // ✅ Skip fetch if cached
      }

      let exercisesData = [];

      try {
        if (bodyPart === 'all') {
          exercisesData = await fetchData(
            "https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0",
            exerciseOptions
          );
        } else {
          exercisesData = await fetchData(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
            exerciseOptions
          );
        }

        // ✅ Save new data to cache
        localStorage.setItem(`exercises_${bodyPart}`, JSON.stringify(exercisesData));

        setExercises(exercisesData);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]); // ✅ add setExercises here

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          // <p> {exercise.name} </p>
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
