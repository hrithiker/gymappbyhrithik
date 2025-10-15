import React from "react";
import { Typography, Stack, Box, Container } from "@mui/material";
import barbell from "../assets/images/barbell.jpg";

const Aboutus = () => {
  const features = [
    "Personalized Workouts: Tailor your exercise routines based on your fitness goals, preferences, and level of experience.",
    "Comprehensive Exercise Database: Access a vast library of exercises with detailed instructions and demonstrations to ensure proper form and technique.",
    "Progress Tracking: Monitor your progress, track your workouts, and celebrate your achievements as you reach your milestones.",
    "Community Support: Connect with like-minded individuals, share your fitness journey, and find motivation and encouragement from our supportive community.",
    "Expert Guidance: Benefit from insights and tips from fitness professionals to help you optimize your workouts and maximize your results."
  ];

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
      <Stack 
        gap="40px" 
        sx={{ 
          flexDirection: { lg: "row" }, 
          alignItems: { lg: "flex-start" },
          justifyContent: "space-between"
        }}
      >
        {/* Image Section */}
        <Box sx={{ 
          flex: { lg: 1 }, 
          maxWidth: { lg: "500px" },
          display: "flex",
          justifyContent: "center"
        }}>
          <img 
            src={barbell} 
            loading="lazy" 
            className="detail-image"
            style={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
            }}
          />
        </Box>

        {/* Content Section */}
        <Box sx={{ 
          flex: { lg: 1.2 },
          maxWidth: { lg: "700px" }
        }}>
          <Stack gap="32px">
            {/* Main Title */}
            <Typography
              sx={{ 
                fontSize: { lg: "64px", xs: "36px" },
                textAlign: { xs: "center", lg: "left" }
              }}
              fontWeight={800}
              color="#FF2625"
            >
              About Us
            </Typography>

            {/* Introduction */}
            <Typography
              sx={{ fontSize: { lg: "20px", xs: "16px" } }}
              color="#4F4C4C"
              lineHeight={1.7}
            >
              Welcome to our fitness and gym exercise app! We are a passionate team
              of four individuals who came together with a common goal: to
              revolutionize the way people approach fitness and exercise. With our
              expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js),
              we've crafted a comprehensive platform designed to empower users on
              their fitness journey.
            </Typography>

            {/* Our Mission */}
            <Box>
              <Typography
                sx={{ fontSize: { lg: "32px", xs: "24px" } }}
                fontWeight={700}
                color="#3A1212"
                mb={2}
              >
                Our Mission
              </Typography>
              <Typography
                sx={{ fontSize: { lg: "18px", xs: "16px" } }}
                color="#4F4C4C"
                lineHeight={1.7}
              >
                At the core of our mission is the belief that fitness should be
                accessible, enjoyable, and personalized for everyone. We understand
                the challenges individuals face when trying to adopt a healthier
                lifestyle, which is why we've created an app that caters to users of
                all fitness levels, interests, and schedules.
              </Typography>
            </Box>

            {/* What Sets Us Apart */}
            <Box>
              <Typography
                sx={{ fontSize: { lg: "32px", xs: "24px" } }}
                fontWeight={700}
                color="#3A1212"
                mb={2}
              >
                What Sets Us Apart
              </Typography>
              <Typography
                sx={{ fontSize: { lg: "18px", xs: "16px" } }}
                color="#4F4C4C"
                lineHeight={1.7}
              >
                What makes our app unique is its versatility and user-centric
                design. Whether you're a seasoned gym-goer, a beginner looking to
                get started, or someone with specific fitness goals in mind, our app
                offers something for everyone. From customizable workout routines
                and expert guidance to a supportive community and progress tracking
                tools, we're here to support you every step of the way.
              </Typography>
            </Box>

            {/* Key Features */}
            <Box>
              <Typography
                sx={{ fontSize: { lg: "32px", xs: "24px" } }}
                fontWeight={700}
                color="#3A1212"
                mb={3}
              >
                Key Features
              </Typography>
              <Stack component="ul" sx={{ pl: 2, m: 0 }}>
                {features.map((feature, index) => (
                  <Typography
                    key={index}
                    component="li"
                    sx={{ 
                      fontSize: { lg: "18px", xs: "16px" },
                      color: "#4F4C4C",
                      lineHeight: 1.7,
                      mb: 2,
                      "&::marker": {
                        color: "#FF2625"
                      }
                    }}
                  >
                    {feature}
                  </Typography>
                ))}
              </Stack>
            </Box>

            {/* Closing Statement */}
            <Box sx={{ 
              textAlign: "center", 
              mt: 4,
              p: 3,
              backgroundColor: "#FFF3F4",
              borderRadius: "15px",
              borderLeft: "4px solid #FF2625"
            }}>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "22px" } }}
                fontWeight={700}
                color="#FF2625"
              >
                Let's make every workout count!
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Aboutus;