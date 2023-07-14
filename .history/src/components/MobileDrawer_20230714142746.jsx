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

  const buttons =["Sign in", "Sign up"]

  return (
    <Hidden smUp>
      <Box>
        <Button onClick={handleDrawerToggle}>
          <MenuIcon />
        </Button>
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
          <List>
          {buttons.map(item => )<Button
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  display: "flex",
                  textAlign:"left",
                  textTransform:"none"
                }}
              >
              
                <ListItemText primary={"aaa"} />
                <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
              </Button>}
            {categories.map((item) => (
              <Button
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  display: "flex",
                  textAlign:"left",
                  textTransform:"none"
                }}
              >
                <Box pr={1}>
                  <Image src={item.icon} height={"2rem"} />
                </Box>
                <ListItemText primary={item.name} />
                <ListItemIcon sx={{ justifyContent: "flex-end" }}>
                  <KeyboardArrowRightIcon />
                </ListItemIcon>
              </Button>
            ))}
          </List>
        </Drawer>
      </Box>
    </Hidden>
  );
};

export default MobileDrawer;
