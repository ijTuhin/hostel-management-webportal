import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
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

import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 240;

const FinanceDrawer = () => {
    return (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            style={{ marginTop: "5rem", backgroundColor: "#14b8a6" }}
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Typography
                style={{ textAlign: "center" }}
                variant="h6"
                noWrap
                component="div"
              >
                Account Management Panel
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List style={{ marginTop: "5rem" }}>
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
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Outlet />
          </Box>
        </Box>
      );
}

export default FinanceDrawer