import React, { useState } from "react";
import SingleCarousel from "../components/SingleCarousel";
import { Box } from "@mui/material";
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

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <Box>
      <SingleCarousel images={images} />
      <Box p={0} width={"100vw"}>
        <Typography fontSize={42} fontWeight={600}>
          A broad selection of courses
        </Typography>
        <Typography fontSize={20}>
          Choose from over 210,000 online video courses with new additions published every month
        </Typography>
        <Box display={"flex"} flexDirection={"row"} marginTop={2}>
          {courses.map((i, n) => (
            <Button variant="text" onClick={() => setSelectedItem(n)}>
              <Typography fontWeight={600} color={selectedItem === n ? grey[900] : grey[500]}>
                {i.name}
              </Typography>
            </Button>
          ))}
        </Box>
        <Box p={0} b={"1px solid" + grey[600]}>
          <Typography fontWeight={600} fontSize={28}>
            {courses[selectedItem].title}
          </Typography>
          <Typography width={"65%"} marginY={2}>
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
            elements={courses[selectedItem].array.map((item, n) => (
              <Box border={"1px solid red"}>
              <CourseCard
                title={item.title}
                text={item.text}
                rating={item.rating}
                boxWidth={"100vw"}
                width={250}
                height={120}
                imageObjectFit={"cover"}
              />
              </Box>
            ))}
            index={selectedItem}
          />
        </Box>
      </Box>
      <Box px={4} py={8} sx={{ backgroundColor: grey[200] }}>
        <Typography fontSize={24} fontWeight={600}>
          How learners like you are achieving their goals
        </Typography>
        <MultipleCarousel
          elements={testimonials.map((item, n) => (
            <TestimonialCard name={item.name} text={item.text} />
          ))}
          index={selectedItem}
        />
      </Box>
      <Box px={4} py={8} sx={{ backgroundColor: grey[100] }}>
        <Typography fontSize={24} fontWeight={600}>
          Students are viewing
        </Typography>
        <MultipleCarousel
          elements={courses[selectedItem].array.map((item, n) => (
            <CourseCard
              title={item.title}
              text={item.text}
              rating={item.rating}
              boxWidth={250}
              width={250}
              height={120}
              imageObjectFit={"cover"}
            />
          ))}
          index={selectedItem}
        />
      </Box>
      <Box px={4} py={8} sx={{ backgroundColor: grey[100] }}>
        <Typography fontSize={24} fontWeight={600}>
          Because you searched front end programming
        </Typography>
        <MultipleCarousel
          elements={courses[selectedItem].array.map((item, n) => (
            <CourseCard
              title={item.title}
              text={item.text}
              rating={item.rating}
              boxWidth={250}
              width={250}
              height={120}
              imageObjectFit={"cover"}
            />
          ))}
          index={selectedItem}
        />
      </Box>
      <Box px={4} py={8} sx={{ backgroundColor: grey[100] }}>
        <Typography fontSize={24} fontWeight={600} mb={5}>
          Top categories
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {categories.map((item) => (
            <Box
              width={"25%"}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              mb={4}
            >
              <Button>
                <Box sx={{ backgroundColor: grey[200], justifyContent: "center" }} p={2}>
                  <Image src={item.icon} objectFit={"contain"} height={150} width={200} />
                </Box>
              </Button>

              <Typography fontSize={16} fontWeight={600}>
                {item.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box px={4} py={8} sx={{ backgroundColor: grey[100] }}>
        <Typography fontSize={24} fontWeight={600} mb={5}>
          Featured topics by category
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {categories.map((item) => (
            <Box width={"25%"} display={"flex"} flexDirection={"column"} mb={3}>
              <Typography fontSize={20} fontWeight={600} mb={1}>
                {item.name}
              </Typography>
              {item.array.map((i) => (
                <Button
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "80%",
                  }}
                >
                  <Typography fontWeight={600} color={green[700]}>
                    {i}
                  </Typography>
                  <Typography fontSize={14} color={grey[600]} mb={2}>
                    {item.students.toLocaleString()} students
                  </Typography>
                </Button>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Box px={4} py={8} backgroundColor={grey[200]} position={"relative"} display={"flex"} justifyContent={"center"}>
        <Box backgroundColor={grey[100]} sx={{ position: "relative", width: "60vw" }}>
          <MultipleCarousel elements={
          <Box display={"flex"} width={"180vw"}>
            <OpinionCard />
            <OpinionCard />
            <OpinionCard />
          </Box>} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
