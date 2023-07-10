import React, {useRef} from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const CourseCardTooltip = ({ display, placement }) => {

    const containerRef = useRef(null);

    const handleCheckPosition = () => {
        if (containerRef.current) {
          const { x } = containerRef.current.getBoundingClientRect();
          console.log('Container X Position:', x);
        }
      };

  return (
    <Box
      position={"absolute"}
      display={display}
      border={"1px solid" + grey[400]}
      sx={{ p: 1, backgroundColor: grey[100] }}
      left={placement ? "-100%" : "100%"}
      top={0}
      zIndex={1}
    >
      Automate the Boring Stuff with Python Programming
    </Box>
  );
};

export default CourseCardTooltip;
