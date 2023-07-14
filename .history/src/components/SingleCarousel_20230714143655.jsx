import React, { useState, useEffect } from "react";
import Image from "../components/Image";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { autocompleteClasses } from "@mui/material";

const SingleCarousel = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hover) {
        setIndex((state) => (state === images.length - 1 ? 0 : state + 1));
      }
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [hover]);

  const handlePrevious = () => {
    if (!transition) {
      setTransition(true);
      setIndex((state) => (state > 0 ? setIndex(state - 1) : setIndex(images.length - 1)));
      setTimeout(() => setTransition(false), 500);
    }
  };

  const handleNext = () => {
    if (!transition) {
      setTransition(true);
      setIndex((state) => (state < images.length - 1 ? setIndex(state + 1) : setIndex(0)));
      setTimeout(() => setTransition(false), 500);
    }
  };

  return (
    <Box height={"80vh"} sx={{ position: "relative", overflow: "hidden" }}>
      {images.map((item, n) => (
        <Box
          sx={{
            position: "absolute",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            height: "80vh",
            transition: "0.5s",
            filter: n === index ? "Opacity(1)" : "Opacity(0)",
          }}
        >
          <Image src={item.image} height={"80vh"} objectFit={"cover"} />
          <Box
            p={3}
            sx={{
              position: "absolute",
              bottom: "5%",
              left: 0,
              right: 0,
              zIndex: 1,
              boxShadow: 10,
              boxSizing: "border-box",
              backgroundColor: grey[50],
              textAlign: "center",
            }}
          >
            <Typography variant={"h4"} fontWeight={600}>
              {item.name}
            </Typography>
            <Typography variant={"h6"}>{item.description}</Typography>
          </Box>
        </Box>
      ))}
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          top: "50%",
        }}
      >
        <IconButton
          onClick={handlePrevious}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >                                                                                    
          <KeyboardArrowLeftIcon fontSize="large" style={{ color: grey[50] }} />
        </IconButton>
        <IconButton
          onClick={handleNext}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <KeyboardArrowRightIcon fontSize="large" style={{ color: grey[50] }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SingleCarousel;
