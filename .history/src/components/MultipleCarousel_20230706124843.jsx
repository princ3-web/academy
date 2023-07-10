import React from "react";
import { Box } from "@mui/material";

const MultipleItemCarousel = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <Box
    sx={{
      display: 'flex',
      overflowX: 'scroll',
      scrollBehavior: 'smooth',
      '&::-webkit-scrollbar': {
        display: 'none', // hide the horizontal scrollbar
      },
    }}
  >
    {items.map((item, index) => (
      <Box
        key={index}
        sx={{
          minWidth: 200,
          height: 200,
          marginRight: 10,
          backgroundColor: 'lightgray',
        }}
      >
        {item}
      </Box>
    ))}
  </Box>
);
};
In the example above, each item is represented by a <Box> component. You can customize the styling based on your needs.

Render the <Carousel> component in your main application component or any other desired location:

jsx
Copy code
import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel';

ReactDOM.render(<Carousel />, document.getElementById('root'));
Make sure to replace 'root' with the ID of the root element in your HTML file.

That's it! With these steps, you can create a basic horizontal carousel using React and Material-UI (Mui). Feel free to modify the styles and add additional functionality as per your requirements.







  );
};

export default MultipleItemCarousel;
