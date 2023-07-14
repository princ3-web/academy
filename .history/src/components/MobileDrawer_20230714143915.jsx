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
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const MobileDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const buttons = [
    { name: "Home", link: "/" },
    { name: "Sign in", link: "/signin" },
    { name: "Sign up", link: "/signup" },
  ];

  return (
    <Hidden smUp>
      <Box>
        <Button onClick={handleDrawerToggle}>
          <MenuIcon />
        </Button>
        <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
          <List>
            {buttons.map((item) => (
              <Link to={item.link} onClick={() => setIsDrawerOpen(!isDrawerOpen)} sx={{textDecoration: ""}}>
              <Button
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  display: "flex",
                  textAlign: "left",
                  textTransform: "none",
                  px: 2,
                }}
              >
                <ListItemText primary={item.name} />
              </Button>
              </Link>
            ))}

            <Box sx={{ width: "100%", height: "1px", backgroundColor: grey[300], my: 1 }}></Box>

            {categories.map((item) => (
              <Button
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  display: "flex",
                  textAlign: "left",
                  textTransform: "none",
                  px: 2,
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
