import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";


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
            <ListItem>
              <ListItemText primary="Item 1" />
              <ListItemIcon><SchoolOutlinedIcon/></ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Hidden>
  );
};

export default MobileDrawer;
