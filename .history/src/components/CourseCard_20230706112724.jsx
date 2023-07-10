import React from "react";
import { Box } from "@mui/material";
import Image from "./Image";
import { Typography } from "@mui/material";
import StarRating from "./StarRating";

const CourseCard = ({ width, imageWidth, imageHeight, imageObjectFit, title, text, margin, rating }) => {
  return (
    <Box margin={margin} border={"1px solid red"} width={"234px"}>
      <Image width={imageWidth} height={imageHeight} objectFit={imageObjectFit} />
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
  width: 300,
  imageObjectFit: "cover",
  title: "YYY",
  text: "xxxxxx xxx xxxxxx xxxxxxxxxxx xxx xxxxx xxxx",
  margin: 1,
  rating: 3,
};

export default CourseCard;
