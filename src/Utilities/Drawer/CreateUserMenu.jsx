import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { NavLink } from "react-router-dom";

const CreateUserMenu = () => {
  return (
    <Box sx={{ overflow: "hidden", position: "absolute", width: "100%" }}>
      <List>
        <ListItem disablePadding>
          <NavLink
            to="/users/create/academic"
            className={({ isActive }) =>
              isActive ? "w-full text-green-500" : "w-full"
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <RestaurantIcon />
              </ListItemIcon>
              <ListItemText primary="Academic" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to="/users/create/personal"
            className={({ isActive }) =>
              isActive ? "w-full text-green-500" : "w-full"
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <CreditScoreIcon />
              </ListItemIcon>
              <ListItemText primary="Personal" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to="/users/create/overview"
            className={({ isActive }) =>
              isActive ? "w-full text-green-500" : "w-full"
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <LocalGroceryStoreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Overview" />
            </ListItemButton>
          </NavLink>
        </ListItem>
        <ListItem disablePadding>
          <NavLink
            to="/users/create/account"
            className={({ isActive }) =>
              isActive ? "w-full text-green-500" : "w-full"
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <SummarizeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default CreateUserMenu;
