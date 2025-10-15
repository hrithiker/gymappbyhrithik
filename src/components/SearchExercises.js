import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utilts/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  // const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0",
        // "https://exercisedb.p.rapidapi.com/exercises"
        // 'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      // console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  };

 return (
  <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography
      fontWeight={700}
      sx={{ 
        fontSize: { lg: "44px", xs: "28px" },
        lineHeight: { lg: "50px", xs: "35px" },
        textAlign: "center",
        px: { xs: 2, sm: 0 }
      }}
      mb="40px"
    >
      Awesome Exercises You <br />
      Should Know
    </Typography>
    
    <Box 
      position="relative" 
      mb="60px"
      sx={{ 
        width: "100%",
        maxWidth: { lg: "800px", xs: "100%" },
        px: { xs: 1, sm: 0 }
      }}
    >
      <TextField
        sx={{
          input: { 
            fontWeight: "700", 
            border: "none", 
            borderRadius: "4px",
            padding: { xs: "12px 20px", sm: "16px 24px" },
            fontSize: { xs: "14px", sm: "16px" }
          },
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "40px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none",
            },
          },
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Search Exercises"
        type="text"
      />
      <Button
        className="search-btn"
        sx={{
          bgcolor: "#FF2625",
          color: "#fff",
          textTransform: "none",
          width: { lg: "160px", xs: "100px" },
          height: { xs: "48px", sm: "56px" },
          position: "absolute",
          right: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: { lg: "18px", xs: "14px" },
          fontWeight: 600,
          borderRadius: "40px",
          boxShadow: "0 4px 15px rgba(255, 38, 37, 0.3)",
          "&:hover": {
            bgcolor: "#e02020",
          }
        }}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>
    
    <Box sx={{ 
      position: "relative", 
      width: "100%", 
      p: { xs: "10px", sm: "20px" } 
    }}>
      <HorizontalScrollbar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        isBodyPart
      />
    </Box>
  </Stack>
);
};

export default SearchExercises;
