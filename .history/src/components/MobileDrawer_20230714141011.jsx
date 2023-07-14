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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import categories from "../data/categories";

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
            {categories.map((item)
              <ListItem
              display={"flex"}
              sx={{ justifyContent: "space-between" }}
            >
              <ListItemText primary="abc" />
              <ListItemIcon sx={{justifyContent:"flex-end"}}>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
            </ListItem>}
          </List>
        </Drawer>
      </Box>
    </Hidden>
  );
};

export default MobileDrawer;
