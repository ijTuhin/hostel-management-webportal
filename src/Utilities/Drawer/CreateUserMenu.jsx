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
import {FaUniversity} from "react-icons/fa";
import {MdPersonAddAlt1} from "react-icons/md";
import {IoPersonSharp, IoPersonAddSharp} from "react-icons/io5";
import {BsPersonBoundingBox,BsFillPersonLinesFill, BsPersonCircle} from "react-icons/bs";
const CreateUserMenu = () => {
  return (
    <Box sx={{ overflow: "hidden", position: "absolute", width: "100%" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
          <NavLink
            to="/users/create/academic"
            className={({ isActive }) =>
              isActive ? "flex justify-between items-center gap-x-5 text-green-500" : "flex justify-between items-center gap-x-5"
            }
          >
              <FaUniversity/>
              <ListItemText primary="Academic" />
          </NavLink>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
          <NavLink
            to="/users/create/personal"
            className={({ isActive }) =>
              isActive ? "flex justify-between items-center gap-x-5 text-green-500" : "flex justify-between items-center gap-x-5"
            }
          >
              <IoPersonSharp/>
              <ListItemText primary="Personal" />
          </NavLink>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
          <NavLink
            to="/users/create/overview"
            className={({ isActive }) =>
              isActive ? "flex justify-between items-center gap-x-5 text-green-500" : "flex justify-between items-center gap-x-5"
            }
          >
              <BsFillPersonLinesFill/>
              <ListItemText primary="Overview" />
          </NavLink>
            </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
          <NavLink
            to="/users/create/account"
            className={({ isActive }) =>
              isActive ? "flex justify-between items-center gap-x-5 text-green-500" : "flex justify-between items-center gap-x-5"
            }
          >
              <IoPersonAddSharp/>
              <ListItemText primary="Create" />
          </NavLink>
            </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default CreateUserMenu;
