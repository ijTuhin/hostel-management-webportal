import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet } from "react-router-dom";
import Meal from "./Meal";
import Finance from "./Finance";
import Warden from "./Warden";
import CreateUserMenu from "./CreateUserMenu";

const Drawers = ({ item, title }) => {
  const drawerWidth = 249.5;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {title && (
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
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Drawer
        variant="permanent"
        className={` shadow-lg ${ title ? "h-screen" : "h-[82.26vh] bg-teal-500"}`}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            // margin: "4.35rem 0",
            position:"relative",
            border: "none",
            // height:"100vh",
            // height:"82.26vh",
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {item == 1 && <Meal />}
        {item == 2 && <Finance />}
        {item == 3 && <Warden />}
        {item == 4 && <CreateUserMenu />}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Drawers;