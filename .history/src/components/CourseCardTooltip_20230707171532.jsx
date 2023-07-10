import React, {useRef} from "react";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material";

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
    width={250}
      position={"absolute"}
      display={display}
      border={"1px solid" + grey[400]}
      sx={{ p: 1, backgroundColor: grey[100] }}
      left={placement ? "-50%" : "50%"}
      top={0}
      zIndex={1}
    >
        <Typography></Typography>
      
    </Box>
  );
};

export default CourseCardTooltip;
