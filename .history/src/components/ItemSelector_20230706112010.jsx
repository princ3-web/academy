import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import CourseCard from "./CourseCard";

const ItemSelector = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const elements = [
    {
      name: "Python",
      title: "Learn Python",
      text: "Master the versatile programming language.",
      button: "Start Now",
      array: [
        {
          title: "Python decorators",
          text: "Enhance functions and classes with reusable and customizable features.",
          rating: "4.7",
        },
        {
          title: "Asynchronous programming",
          text: "Unlock efficiency and responsiveness in complex I/O operations.",
          rating: "2.5",
        },
        {
          title: "Python data visualization",
          text: "Unleash your data's visual potential with dynamic and insightful plots.",
          rating: "3.9",
        },
        {
          title: "Python decorators",
          text: "Enhance functions and classes with reusable and customizable features.",
          rating: "4.7",
        },
        {
          title: "Asynchronous programming",
          text: "Unlock efficiency and responsiveness in complex I/O operations.",
          rating: "2.5",
        },
        {
          title: "Python data visualization",
          text: "Unleash your data's visual potential with dynamic and insightful plots.",
          rating: "3.9",
        },
        {
          title: "Python decorators",
          text: "Enhance functions and classes with reusable and customizable features.",
          rating: "4.7",
        },
        {
          title: "Asynchronous programming",
          text: "Unlock efficiency and responsiveness in complex I/O operations.",
          rating: "2.5",
        },
        {
          title: "Python data visualization",
          text: "Unleash your data's visual potential with dynamic and insightful plots.",
          rating: "3.9",
        },
      ],
    },
    {
      name: "Excel",
      title: "Excel Mastery",
      text: "Unlock the power of data analysis with Excel.",
      button: "Explore",
      array: [
        {
          title: "Pivot Tables",
          text: "Data Analysis Powerhouse - Unleashing Excel's analytical capabilities using pivot tables.",
          rating: "4.3",
        },
        {
          title: "Conditional Formatting",
          text: "Enhancing data visualization and analysis with conditional formatting in Excel.",
          rating: "1.8",
        },
        {
          title: "VLOOKUP Function",
          text: "Mastering Excel's VLOOKUP function for efficient data retrieval and matching.",
          rating: "4.1",
        },
      ],
    },
    {
      name: "Web Development",
      title: "Web Development Fundamentals",
      text: "Build interactive websites and web applications.",
      button: "Get Started",
      array: [
        { title: "Responsive Design", text: "Learn how to use Excel for data analysis.", rating: "2.9" },
        { title: "JavaScript Fundamentals", text: "Master the basics of web development.", rating: "3.7" },
        {
          title: "CSS Flexbox",
          text: "Harnessing the power of CSS flexbox for flexible and responsive website layouts.",
          rating: "1.4",
        },
      ],
    },
    {
      name: "JavaScript",
      title: "JavaScript Basics",
      text: "Learn the fundamentals of JavaScript programming.",
      button: "Start Learning",
      array: [
        {
          title: "DOM Manipulation",
          text: "Manipulating HTML elements dynamically using JavaScript for interactive web experiences.",
          rating: "4.5",
        },
        {
          title: "Promises",
          text: "Managing asynchronous operations efficiently with JavaScript promises for smoother execution.",
          rating: "2.2",
        },
        {
          title: "ES6 Syntax",
          text: "Embracing the latest features of ES6 syntax to write cleaner and more concise JavaScript code.",
          rating: "3.8",
        },
      ],
    },
    {
      name: "Data Science",
      title: "Introduction to Data Science",
      text: "Discover the world of data science and analytics.",
      button: "Explore Now",
      array: [
        {
          title: "Machine Learning Basics",
          text: "Understanding the fundamentals of machine learning for predictive modeling tasks.",
          rating: "3.3",
        },
        {
          title: "Data Visualization",
          text: "Communicating complex data patterns and trends through impactful visualizations.",
          rating: "4.9",
        },
        {
          title: "Exploratory Data Analysis",
          text: "Analyzing and exploring data to discover patterns, outliers, and relationships.",
          rating: "2.7",
        },
      ],
    },
    {
      name: "Amazon AWS",
      title: "AWS Cloud Computing",
      text: "Harness the power of cloud computing with AWS.",
      button: "Get Started",
      array: [
        {
          title: "Elastic Compute Cloud",
          text: "Deploying and managing scalable virtual servers on the AWS EC2 platform.",
          rating: "3.1",
        },
        {
          title: "Simple Storage Service",
          text: "Storing and retrieving data securely in the highly scalable AWS S3 storage service.",
          rating: "1.6",
        },
        {
          title: "Lambda Functions",
          text: "Building and deploying serverless functions for event-driven applications on AWS Lambda.",
          rating: "4.6",
        },
      ],
    },
    {
      name: "Drawing",
      title: "Master the Art of Drawing",
      text: "Unleash your creativity through drawing techniques.",
      button: "Start Drawing",
      array: [
        {
          title: "Perspective Drawing",
          text: "Creating realistic depth and dimension in drawings through perspective techniques.",
          rating: "2.3",
        },
        {
          title: "Figure Anatomy",
          text: "Understanding human anatomy to accurately depict figures and enhance character drawings.",
          rating: "3.5",
        },
        {
          title: "Shading Techniques",
          text: "Mastering various shading techniques to bring life and realism to drawings.",
          rating: "4.8",
        },
      ],
    },
  ];

  return (
    <Box paddingX={4} paddingY={4}>
      <Typography fontSize={42} fontWeight={600}>
        A broad selection of courses
      </Typography>
      <Typography fontSize={20}>
        Choose from over 210,000 online video courses with new additions published every month
      </Typography>
      <Box display={"flex"} flexDirection={"row"} marginTop={2}>
        {elements.map((i, n) => (
          <Button variant="text" onClick={() => setSelectedItem(n)}>
            <Typography fontWeight={600} color={selectedItem === n ? grey[900] : grey[500]}>
              {i.name}
            </Typography>
          </Button>
        ))}
      </Box>
      {
        <Box padding={4} border={1} >
          <Typography fontWeight={600} fontSize={28}>
            {elements[selectedItem].title}
          </Typography>
          <Typography width={"65%"} marginY={2}>
            {elements[selectedItem].text}
          </Typography>
          <Button variant="text" sx={{ border: "1px solid" + grey[900], borderRadius: 0, padding: 1 }}>
            <Typography fontWeight={600} color={grey[900]} textTransform={"none"}>
              {elements[selectedItem].button}
            </Typography>
          </Button>
          <Box display="flex" overflow={"hidden"} sx={{overflow:"hidden"}}>
            {elements[selectedItem].array.map((item, n) => (
              <CourseCard width={"25%"} title={item.title} text={item.text} rating={item.rating} />
            ))}
          </Box>
        </Box>
      }
    </Box>
  );
};

export default ItemSelector;
