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
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 240;

const MealDrawer = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ marginTop: "5rem", backgroundColor: "#22c55e" }}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            style={{ textAlign: "center" }}
            variant="h6"
            noWrap
            component="div"
          >
            Meal Management Panel
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
              <NavLink to="/meal/orders">
                <ListItemButton>
                  <ListItemIcon>
                    <RestaurantIcon />
                  </ListItemIcon>
                  <ListItemText primary="Meal Orders" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/meal/payments">
                <ListItemButton>
                  <ListItemIcon>
                    <CreditScoreIcon />
                  </ListItemIcon>
                  <ListItemText primary="Payment Status" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/meal/groceries">
                <ListItemButton>
                  <ListItemIcon>
                    <LocalGroceryStoreOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Groceries" />
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding>
              <NavLink to="/meal/summary">
                <ListItemButton>
                  <ListItemIcon>
                    <SummarizeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Summary" />
                </ListItemButton>
              </NavLink>
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
};

export default MealDrawer;
