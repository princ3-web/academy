import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "./Image";
import { Typography } from "@mui/material";
import StarRating from "./StarRating";
import educationImage from "../assets/images/education.png";
import CourseCardTooltip from "./CourseCardTooltip";

const CourseCard = ({
  boxWidth,
  imageWidth,
  imageHeight,
  imageObjectFit,
  title,
  text,
  margin,
  rating,
}) => {
  const [index, setIndex] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box
      position={"relative"}
      margin={margin}
      width={boxWidth}
      onMouseEnter={() => setIndex(true)}
      onMouseLeave={() => setIndex(false)}
      sx={{ cursor: "pointer" }}
      p={1}
    >
      <Image
        imageWidth={imageWidth}
        height={imageHeight}
        objectFit={imageObjectFit}
        src={educationImage}
      />
      <Typography fontSize={16} fontWeight={600}>{title}</Typography>
      <Typography fontSize={14}>{text}</Typography>
      <Box display={"flex"}>
        <Typography color="darkorange" mr={1}>
          {rating}
        </Typography>
        <StarRating rating={rating} />
      </Box>
      <Typography color={teal[600]} fontWeight={600}>99,99 zł</Typography>
      <Box>
        <CourseCardTooltip
          title={title}
          text={text}
          display={index ? "block" : "none"}
          placement={position.x > window.innerWidth * 0.6}
        />
      </Box>
    </Box>
  );
};

CourseCard.defaultProps = {
  boxWidth: 200,
  imageObjectFit: "cover",
  title: "YYY",
  text: "xxx",
  margin: 1,
  rating: 3,
};

export default CourseCard;
