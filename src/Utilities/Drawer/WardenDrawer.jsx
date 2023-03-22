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
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import { NavLink, Outlet } from "react-router-dom";

const drawerWidth = 240;

const WardenDrawer = () => {
    return (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            style={{ marginTop: "4.35rem", backgroundColor: "#10b981" }}
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Typography
                style={{ textAlign: "center" }}
                variant="h6"
                noWrap
                component="div"
              >
                Room Management Panel
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
                      to="/warden"
                      className="flex justify-evenly items-center"
                    >
                      <ListItemIcon>
                        <AddBusinessOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Room Allocation" />
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
                        <CreditScoreIcon />
                      </ListItemIcon>
                      <ListItemText primary="Rent Status" />
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
                        <BedOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Seat Details" />
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
                        <HowToRegOutlinedIcon />
                      </ListItemIcon>
                      <ListItemText primary="Attendance" />
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
}

export default WardenDrawer