import React from "react";
import { Box } from "@mui/material";
import Image from "./Image";
import { Typography } from "@mui/material";
import StarRating from "./StarRating";
import education from "../assets/images/"

const CourseCard = ({ boxWidth, imageWidth, imageHeight, imageObjectFit, title, text, margin, rating }) => {
  return (
    <Box margin={margin} width={boxWidth}>
      <Image imageWidth={imageWidth} height={imageHeight} objectFit={imageObjectFit} src={"https://source.unsplash.com/random/300x200/?img=1"}/>
      <Typography>{title}</Typography>
      <Typography>{text}</Typography>
      <Box display={"flex"}>
        <Typography color="darkorange" mr={1}>
          {rating}
        </Typography>
        <StarRating rating={rating} />
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
