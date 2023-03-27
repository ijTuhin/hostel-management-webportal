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

const Meal = () => {
  return (
    <Box sx={{ overflow: "auto" }}>
          <List style={{ marginTop: "4.35rem" }}>
            <ListItem disablePadding>
              <ListItemButton>
                <NavLink
                  to="/meal"
                  className="flex justify-evenly items-center"
                >
                  <ListItemIcon>
                    <RestaurantIcon />
                  </ListItemIcon>
                  <ListItemText primary="Meal Orders" />
                </NavLink>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <NavLink
                  to="/meal/payments"
                  className="flex justify-evenly items-center"
                >
                  <ListItemIcon>
                    <CreditScoreIcon />
                  </ListItemIcon>
                  <ListItemText primary="Payment Status" />
                </NavLink>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <NavLink
                  to="/meal/groceries"
                  className="flex justify-evenly items-center"
                >
                  <ListItemIcon>
                    <LocalGroceryStoreOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Groceries" />
                </NavLink>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <NavLink
                  to="/meal/summary"
                  className="flex justify-evenly items-center"
                >
                  <ListItemIcon>
                    <SummarizeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Summary" />
                </NavLink>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
  );
};

export default Meal;
