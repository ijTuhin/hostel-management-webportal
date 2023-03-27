import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
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
import { NavLink } from "react-router-dom";

const Warden = () => {
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
      );
}

export default Warden