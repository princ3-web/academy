import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/material";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';


const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  return (
    <Box className={navbarStyles.navbar} px={4}>
       <div>
      <button onClick={handleDrawerToggle}>Open Drawer</button>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List>
          <ListItem button>
            <ListItemIcon>{/* Add icon here */}</ListItemIcon>
            <ListItemText primary="Item 1" />
          </ListItem>
          {/* Add more ListItems for each item you want to display */}
        </List>
      </Drawer>
    </div>
      <IconButton>
        <SchoolOutlinedIcon />
      </IconButton>
      <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
        Categories
      </Button>
      <TextField id="standard-basic" label="Search for anything" variant="filled" sx={{ width: "400px" }} />
      <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
        Business
      </Button>
      <Button variant="text" sx={{ color: grey[900], textTransform: "none", mr: 1 }}>
        Teach
      </Button>
      <IconButton>
        <ShoppingCartIcon />
      </IconButton>
      <div className={navbarStyles.buttons}>
        <Button variant="contained" sx={{ backgroundColor: grey[900], textTransform: "none", mr: 1 }}>
          Log in
        </Button>
        <Button variant="outlined" sx={{ backgroundColor: grey[50], textTransform: "none", color: grey[900], mr: 1 }}>
          Sign up
        </Button>
        <IconButton>
          <PublicOutlinedIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default Navbar;
