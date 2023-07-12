import React, {useState} from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';


const [isDrawerOpen, setIsDrawerOpen] = useState(false);

const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const Drawe = () => {
    return (
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
    );
  };
  

export default Drawer;
