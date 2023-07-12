import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";



const MobileDrawer = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const handleDrawerToggle = () => {
  setIsDrawerOpen(!isDrawerOpen);
};

  return (
    <Box>
      <button onClick={handleDrawerToggle}>Open Drawer</button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button>
            <ListItemIcon>{/* Add icon here */}</ListItemIcon>
            <ListItemText primary="Item 1" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;
