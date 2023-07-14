import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight, Opacity } from "@mui/icons-material";
import { green, grey } from "@mui/material/colors";

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

  console.log(containerWidth);

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <Box
        ref={carouselRef}
        sx={{
          width: "100%",
          display: "flex",
          overflowX: "hidden",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box display="flex" my={4}>
          {elements}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          width: "100%",
          left: "0%",
          top: "50%",
          transform: "translate(0%, -50%)"
        }}
      >
        <IconButton onClick={handleScrollLeft} disabled={scrollAmount === 0}>
          <ArrowCircleLeft style={{ fontSize: "250%" }} sx={{ color: grey[20] }} />
        </IconButton>
        <IconButton
          onClick={handleScrollRight}
          disabled={scrollAmount >= items.length * 210} // Adjust 210 based on item width + margin
        >
          <ArrowCircleRight style={{ fontSize: "250%" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

MultipleCarousel.defaultProps = {
  elements: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8"],
};

export default MultipleCarousel;
