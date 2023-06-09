import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import LogOut from "../../Authentications/LoginForm/LogOut";
import Box from "@mui/material/Box";

const ResponsiveNavbar = ({ i, role }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Menu">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar />
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-600 text-sm px-1.5" : "text-sm pl-1.5"
            }
            to="/"
          >
            Home
          </NavLink>
        </MenuItem>
        {role === "meal" && (
          <MenuItem onClick={handleClose}>
            <Avatar />
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-600 text-sm px-1.5" : "text-sm pl-1.5"
              }
              to="/meal"
            >
              Meal Management
            </NavLink>
          </MenuItem>
        )}
        {role === "warden" && (
          <>
            <MenuItem onClick={handleClose}>
              <Avatar />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-600 text-sm px-1.5" : "text-sm pl-1.5"
                }
                to="/user"
              >
                Users Detail
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-600 text-sm px-1.5" : "text-sm pl-1.5"
                }
                to="/warden"
              >
                Warden Panel
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Avatar />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-green-600 text-sm px-1.5" : "text-sm pl-1.5"
                }
                to="/staff"
              >
                Staff
              </NavLink>
            </MenuItem>
          </>
        )}
        {role === "accountant" && (
          <MenuItem onClick={handleClose}>
            <Avatar />
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-600 text-sm px-1.5" : "text-sm pl-1.5"
              }
              to="/finance-management"
            >
              Finance Panel
            </NavLink>
          </MenuItem>
        )}
        {i && (
          <MenuItem onClick={handleClose}>
            <Avatar />
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-green-600 text-sm px-1.5" : "text-sm pl-1.5"
              }
              to="/create-notice"
            >
              Notices
            </NavLink>
          </MenuItem>
        )}
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <span className="text-sm pl-1.5">
            <LogOut />
          </span>
        </MenuItem>
      </Menu>
    </>
  );
};

export default ResponsiveNavbar;
