import React from "react";
import { Box } from "@mui/material";
import Image from "./Image";
import { Typography } from "@mui/material";
import StarRating from "./StarRating";

const CourseCard = ({ width, imageWidth, imageHeight, imageObjectFit, title, text }) => {
  return (
    <Box width={width}>
      <Image width={imageWidth} height={imageHeight} objectFit={imageObjectFit} />
      <Typography>{title}</Typography>
      <Typography>{text}</Typography>
      <Box display={"flex"}>
        <Typography color="darkorange" mr={1}>
          4.6
        </Typography>
        <StarRating rating={3.5} />
      </Box>
    </Box>
  );
};

CourseCard.defaultProps = {
  width: 300,
  imageObjectFit: "cover",
  title: "YYYY YYYYYYYYYY YYYYYYYYYYYYY",
  text: "xxxxxx xxx xxxxxx xxxxxxxxxxx xxx xxxxx xxxx"
};

export default CourseCard;
