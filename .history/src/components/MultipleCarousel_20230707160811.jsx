import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import CourseCard from "./CourseCard";

const MultipleCarousel = ({ elements, index }) => {
  const carouselRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);

  const items = elements;

  useEffect(() => {
    const updateContainerWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        setContainerWidth(containerWidth);
      }
    };

    window.addEventListener("resize", updateContainerWidth);
    updateContainerWidth();

    return () => {
      window.removeEventListener("resize", updateContainerWidth);
    };
  }, []);

  console.log(containerWidth)

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setScrollAmount(containerWidth);
  }, [containerWidth]);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        ref={carouselRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box display="flex">
          {elements[index].array.map((item, n) => (
            
            <CourseCard
              title={item.title}
              text={item.text}
              rating={item.rating}
              boxWidth={200}
              imageWidth={200}
              imageHeight={"auto"}
            />
          ))}
        </Box>
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
        }}
        onClick={handleScrollLeft}
        disabled={scrollAmount === 0}
      >
        <ArrowCircleLeft fontSize="large" sx={{ color: grey[900] }} />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
        }}
        onClick={handleScrollRight}
        disabled={scrollAmount >= items.length * 210} // Adjust 210 based on item width + margin
      >
        <ArrowCircleRight fontSize="large" sx={{ color: grey[900] }} />
      </IconButton>
    </Box>
  );
};

MultipleCarousel.defaultProps = {
  elements: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"],
};

export default MultipleCarousel;
