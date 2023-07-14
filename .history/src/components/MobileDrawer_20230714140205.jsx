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
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Hidden smUp>
      <Box wid>
        <Button onClick={handleDrawerToggle}>
          <MenuIcon />
        </Button>
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
          <List>
            <ListItem display={"flex"} sx={{backgroundColor:"red", justifyContent:"space-between"}} >
              <ListItemText primary="Item 1" />
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </Hidden>
  );
};

export default MobileDrawer;
