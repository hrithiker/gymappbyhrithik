import React from "react";
import { Typography, Stack, Button } from "@mui/material";

import barbell from "../assets/images/barbell.jpg";

const Aboutus = () => {
  return (
    <Stack gap="20px" sx={{ flexDirection: { lg: "row" }, p: "20px" }}>
      <img src={barbell} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography
          sx={{ fontSize: { lg: "64px", xs: "30px" } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          About Us
        </Typography>
        <Typography
          sx={{ fontSize: { lg: "24px", xs: "18px" } }}
          color="#4F4C4C"
        >
          Welcome to our fitness and gym exercise app! We are a passionate team
          of four individuals who came together with a common goal: to
          revolutionize the way people approach fitness and exercise. With our
          expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js),
          we've crafted a comprehensive platform designed to empower users on
          their fitness journey.
        </Typography>
        <Typography>
          <Typography
            sx={{ fontSize: { lg: "36px", xs: "22px" } }}
            fontWeight={400}
            textTransform="capitalize"
          >
            Our Mission
          </Typography>

          <Typography
            sx={{ fontSize: { lg: "24px", xs: "18px" } }}
            color="#4F4C4C"
          >
            At the core of our mission is the belief that fitness should be
            accessible, enjoyable, and personalized for everyone. We understand
            the challenges individuals face when trying to adopt a healthier
            lifestyle, which is why we've created an app that caters to users of
            all fitness levels, interests, and schedules.
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "36px", xs: "22px" } }}
            fontWeight={400}
            textTransform="capitalize"
          >
            What Sets Us Apart
          </Typography>
          <Typography
            sx={{ fontSize: { lg: "24px", xs: "18px" } }}
            color="#4F4C4C"
          >
            What makes our app unique is its versatility and user-centric
            design. Whether you're a seasoned gym-goer, a beginner looking to
            get started, or someone with specific fitness goals in mind, our app
            offers something for everyone. From customizable workout routines
            and expert guidance to a supportive community and progress tracking
            tools, we're here to support you every step of the way.
          </Typography>

          <Typography
            sx={{ fontSize: { lg: "36px", xs: "22px" } }}
            fontWeight={400}
            textTransform="capitalize"
          >
            Key Features
          </Typography>

          <Typography
            sx={{ fontSize: { lg: "24px", xs: "18px" } }}
            color="#4F4C4C"
          >
            <ul>
              <li>
                {" "}
                *Personalized Workouts*: Tailor your exercise routines based on
                your fitness goals, preferences, and level of experience. -
              </li>
              <li>
                *Comprehensive Exercise Database*: Access a vast library of
                exercises with detailed instructions and demonstrations to
                ensure proper form and technique
              </li>
              .
              <li>
                {" "}
                - *Progress Tracking*: Monitor your progress, track your
                workouts, and celebrate your achievements as you reach your
                milestones.
              </li>
              -{" "}
              <li>
                *Community Support*: Connect with like-minded individuals, share
                your fitness journey, and find motivation and encouragement from
                our supportive community
              </li>{" "}
              -
              <li>
                *Expert Guidance*: Benefit from insights and tips from fitness
                professionals to help you optimize your workouts and maximize
                your results.
              </li>
            </ul>
         
            <Typography 
             sx={{ fontSize: { lg: "36px", xs: "24px" } }}
             >
                Let's make every workout count!</Typography>
          </Typography>
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Aboutus;
