import React, { useState } from "react";
import SingleCarousel from "../components/SingleCarousel";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { green, grey } from "@mui/material/colors";
import MultipleCarousel from "../components/MultipleCarousel";
import { courses } from "../data/courses";
import { testimonials } from "../data/testimonials";
import { images } from "../data/images";
import { categories } from "../data/categories";
import TestimonialCard from "../components/TestimonialCard";
import CourseCard from "../components/CourseCard";
import Image from "../components/Image";
import OpinionCard from "../components/OpinionCard";
import { opinions } from "../data/opinions";

const Home = ({ isMobile }) => {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };

  return (
    <Box>
      <Box>
        <SingleCarousel images={images} />
      </Box>
      <Box position={"relative"} width={"90vw"} left={"5vw"} py={8}>
        <Typography variant="h4" fontWeight={600}>
          A broad selection of courses
        </Typography>
        <Typography variant={"h6"}>
          Choose from over 210,000 online video courses with new additions published every month
        </Typography>

        <Box my={2}>
          <FormControl fullWidth>
            <InputLabel id="technologies" sx={{ backgroundColor: grey[50] }}>
              Select your category
            </InputLabel>
            <Select
              labelId="technologies"
              id="technologies"
              value={selectedItem}
              label="technologies"
              onChange={handleChange}
            >
              {courses.map((item, n) => (
                <MenuItem key={item.name} value={n}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box p={"2vw"} border={"1px solid" + grey[600]}>
          <Typography fontWeight={600} variant={"h5"}>
            {courses[selectedItem].title}
          </Typography>
          <Typography width={"100%"} marginY={2}>
            {courses[selectedItem].text}
          </Typography>
          <Button
            variant="text"
            sx={{ border: "1px solid" + grey[900], borderRadius: 0, padding: 1 }}
          >
            <Typography fontWeight={600} color={grey[900]} textTransform={"none"}>
              {courses[selectedItem].button}
            </Typography>
          </Button>
          <MultipleCarousel
            key={"MultipleCarousel0"}
            elements={courses[selectedItem].array.map((item, n) => (
              <Box key={item.name}>
                <CourseCard
                  title={item.title}
                  text={item.text}
                  rating={item.rating}
                  boxWidth={isMobile ? "86vw" : "29vw"}
                  width={"95%"}
                  height={200}
                  imageObjectFit={"cover"}
                />
              </Box>
            ))}
            index={selectedItem}
          />
        </Box>
      </Box>
      <Box
        position={"relative"}
        width={"90vw"}
        px={"5vw"}
        py={8}
        sx={{ backgroundColor: grey[200] }}
      >
        <Typography variant={"h5"} fontWeight={600}>
          How learners like you are achieving their goals
        </Typography>
        <MultipleCarousel
          key={"MultipleCarousel1"}
          elements={testimonials.map((item, n) => (
            <Box key={item.name}>
              <TestimonialCard
                name={item.name}
                text={item.text}
                width={isMobile ? "75vw" : "25vw"}
              />
            </Box>
          ))}
          index={selectedItem}
        />
      </Box>
      <Box
        position={"relative"}
        width={"90vw"}
        px={"5vw"}
        py={8}
        sx={{ backgroundColor: grey[100] }}
      >
        <Typography variant={"h5"} fontWeight={600}>
          Students are viewing
        </Typography>
        <MultipleCarousel
          key={"MultipleCarousel2"}
          elements={courses[0].array.map((item, n) => (
            <Box key={item.name}>
            <CourseCard
              key={item.name}
              title={item.title}
              text={item.text}
              rating={item.rating}
              boxWidth={isMobile ? "86vw" : "29vw"}
              width={"95%"}
              height={200}
              imageObjectFit={"cover"}
            /></Box>
          ))}
          index={selectedItem}
        />
      </Box>
      <Box
        position={"relative"}
        width={"90vw"}
        px={"5vw"}
        py={8}
        sx={{ backgroundColor: grey[100] }}
      >
        <Typography variant={"h5"} fontWeight={600}>
          Because you searched front end programming
        </Typography>
        <MultipleCarousel
          key={"MultipleCarousel3"}
          elements={courses[selectedItem].array.map((item, n) => (
            <CourseCard
              key={item.name}
              title={item.title}
              text={item.text}
              rating={item.rating}
              boxWidth={isMobile ? "86vw" : "29vw"}
              width={"95%"}
              height={200}
              imageObjectFit={"cover"}
            />
          ))}
          index={selectedItem}
        />
      </Box>
      <Box
        position={"relative"}
        width={"90vw"}
        px={"5vw"}
        py={8}
        sx={{ backgroundColor: grey[100] }}
      >
        <Typography variant={"h5"} fontWeight={600} mb={5}>
          Top categories
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {categories.map((item) => (
            <Box
              key={item.name}
              width={"33%"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              mb={4}
            >
              <Button>
                <Box sx={{ justifyContent: "center" }} p={2}>
                  <Image src={item.icon} objectFit={"contain"} height={150} width={"100%"} />
                </Box>
              </Button>

              <Typography fontWeight={600}>{item.name}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        position={"relative"}
        width={"90vw"}
        px={"5vw"}
        py={8}
        sx={{ backgroundColor: grey[100] }}
      >
        <Typography variant={"h5"} fontWeight={600} mb={5}>
          Featured topics by category
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {categories.map((item) => (
            <Box
              key={item.name}
              width={isMobile ? "50%" : "25%"}
              display={"flex"}
              flexDirection={"column"}
              mb={3}
            >
              <Typography variant={"h6"} fontWeight={600} mb={1}>
                {item.name}
              </Typography>
              {item.array.map((i) => (
                <Button
                  key={item.name}
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: isMobile ? "center" : "flex-start",
                    width: "80%",
                  }}
                >
                  <Typography fontWeight={600} color={green[700]}>
                    {i}
                  </Typography>
                  <Typography variant={"body2"} color={grey[600]} mb={2}>
                    {item.students.toLocaleString()} students
                  </Typography>
                </Button>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Box px={4} py={8} position={"relative"} display={"flex"} justifyContent={"center"}>
        <Box
          backgroundColor={grey[50]}
          sx={{ position: "relative", width: isMobile ? "100vw" : "60vw" }}
          border={"1px solid" + grey[400]}
        >
          <MultipleCarousel
            key={"MultipleCarousel4"}
            elements={
              <Box display={"flex"} width={opinions.length * 60 + "vw"}>
                {opinions.map((item) => (
                  <OpinionCard
                    key={item.name}
                    name={item.name}
                    text={item.text}
                    role={item.role}
                    gender={item.gender}
                    workplace={item.workplace}
                  />
                ))}
              </Box>
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
