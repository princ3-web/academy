import React, {useState} from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';


const Drawer = () => {

    const [isDrawerOpen, setIsDrawerOpen] = RuseState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

  return <div>Drawer</div>;
};

export default Drawer;
