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
        style={{ marginTop: "4.35rem", backgroundColor: "#16a34a" }}
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
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MealDrawer;
