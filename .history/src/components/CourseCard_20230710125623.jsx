import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Image from "./Image";
import { Typography } from "@mui/material";
import StarRating from "./StarRating";
import educationImage from "../assets/images/education.png";
import CourseCardTooltip from "./CourseCardTooltip";
import { teal } from "@mui/material/colors";


const CourseCard = ({
  boxWidth,
  imageWidth,
  imageHeight,
  imageObjectFit,
  title,
  text,
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
      width={boxWidth}
      onMouseEnter={() => setIndex(true)}
      onMouseLeave={() => setIndex(false)}
      sx={{ cursor: "pointer" }}
      py={1}
      mr={}
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
  rating: 3,
};

export default CourseCard;
