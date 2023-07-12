import React, { useState } from "react";
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Hidden, Butt } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Hidden smUp>
      <Box>
        <Button onClick={handleDrawerToggle}>
          <MenuIcon />
        </Button>
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
          <List>
            <ListItem button>
              <ListItemIcon>{/* Add icon here */}</ListItemIcon>
              <ListItemText primary="Item 1" />
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Hidden>
  );
};

export default MobileDrawer;
