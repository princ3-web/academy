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
      title: "aaa",
      text: "bbb",
      button: "ccc",
      array: [
        { title: "Excel", text: "bbb", score: "4.2" },
        { name: "Web Development", text: "bbb", score: "4.2" },
        { name: "JavaScript", text: "bbb", score: "4.2" },
      ],
    },
    {
      name: "Excel",
      title: "aaa",
      text: "bbb",
      button: "ccc",
      array: [
        { title: "Excel", text: "bbb", score: "4.2" },
        { name: "Web Development", text: "bbb", score: "4.2" },
        { name: "JavaScript", text: "bbb", score: "4.2" },
      ],
    },
    {
      name: "Web Development",
      title: "aaa",
      text: "bbb",
      button: "ccc",
      array: [
        { title: "Excel", text: "bbb", score: "4.2" },
        { name: "Web Development", text: "bbb", score: "4.2" },
        { name: "JavaScript", text: "bbb", score: "4.2" },
      ],
    },
    {
      name: "JavaScript",
      title: "aaa",
      text: "bbb",
      button: "ccc",
      array: [
        { title: "Excel", text: "bbb", score: "4.2" },
        { name: "Web Development", text: "bbb", score: "4.2" },
        { name: "JavaScript", text: "bbb", score: "4.2" },
      ],
    },
    {
      name: "Data Science",
      title: "aaa",
      text: "bbb",
      button: "ccc",
      array: [
        { title: "Excel", text: "bbb", score: "4.2" },
        { name: "Web Development", text: "bbb", score: "4.2" },
        { name: "JavaScript", text: "bbb", score: "4.2" },
      ],
    },
    {
      name: "Amazon AWS",
      title: "aaa",
      text: "bbb",
      button: "ccc",
      array: [
        { title: "Excel", text: "bbb", score: "4.2" },
        { name: "Web Development", text: "bbb", score: "4.2" },
        { name: "JavaScript", text: "bbb", score: "4.2" },
      ],
    },
    {
      name: "Drawing",
      title: "aaa",
      text: "bbb",
      button: "ccc",
      array: [
        { title: "Excel", text: "bbb", score: "4.2" },
        { name: "Web Development", text: "bbb", score: "4.2" },
        { name: "JavaScript", text: "bbb", score: "4.2" },
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
        <Box padding={4} border={1}>
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
          <Box>
            {elements[selectedItem].array.map(item => <CourseCard title={} />)}
          </Box>
        </Box>
      }
    </Box>
  );
};

export default ItemSelector;
