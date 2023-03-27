import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import PriceCheckOutlinedIcon from '@mui/icons-material/PriceCheckOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import SetMealOutlinedIcon from '@mui/icons-material/SetMealOutlined';

import { NavLink } from "react-router-dom";

const Finance = () => {
    return (
      <Box sx={{ overflow: "auto" }}>
      <List style={{ marginTop: "4.35rem" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/warden"
              className="flex justify-evenly items-center"
            >
              <ListItemIcon>
                <SetMealOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Meal Bill" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/warden/payments"
              className="flex justify-evenly items-center"
            >
              <ListItemIcon>
                <HomeWorkOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Seat Rent" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/warden/groceries"
              className="flex justify-evenly items-center"
            >
              <ListItemIcon>
                <LocalGroceryStoreRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Grocery Cost" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/warden/summary"
              className="flex justify-evenly items-center"
            >
              <ListItemIcon>
                <ReceiptLongOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Utility bills" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/warden/summary"
              className="flex justify-evenly items-center"
            >
              <ListItemIcon>
                <PriceCheckOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Salaries" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/warden/summary"
              className="flex justify-evenly items-center"
            >
              <ListItemIcon>
                <BalanceOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Balance Sheet" />
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <NavLink
              to="/warden/summary"
              className="flex justify-evenly items-center"
            >
              <ListItemIcon>
                <AccountBalanceWalletOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Summary" />
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
      );
}

export default Finance