import React, {useState} from "react";
import { Box } from "@mui/material";
import Image from "./Image";
import { Typography } from "@mui/material";
import StarRating from "./StarRating";
import educationImage from "../assets/images/education.png";
import CourseCardTooltip from "./CourseCardTooltip";

const CourseCard = ({ boxWidth, imageWidth, imageHeight, imageObjectFit, title, text, margin, rating }) => {

  const [index, setIndex] = useState(false);

  return (
    <Box position={"relative"} margin={margin} width={boxWidth} onMouseEnter={() => setIndex(true)} onMouseLeave={() => setIndex(false)}>
      <Image imageWidth={imageWidth} height={imageHeight} objectFit={imageObjectFit} src={educationImage} />
      <Typography>{title}</Typography>
      <Typography>{text}</Typography>
      <Box display={"flex"}>
        <Typography color="darkorange" mr={1}>
          {rating}
        </Typography>
        <StarRating rating={rating} />
      </Box>
      <Box>
        <CourseCardTooltip sx={{display: ""}} />
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
