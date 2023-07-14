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
import { categories } from "../data/categories";
import Image from "../components/Image";

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
            {categories.map((item) => (
              <ListItem
                display={"flex"}
                sx={{ justifyContent: "space-between", alignItems: "center" }}
              >
                <Image src={item.icon} height={"1.5rem"} sx={{p: }}/>
                <ListItemText primary={item.name} />
                <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </Hidden>
  );
};

export default MobileDrawer;
