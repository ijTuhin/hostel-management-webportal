import React, { useContext, useState } from "react";
import {
  IoMdArrowDropright,
  IoMdArrowDropdown,
  IoIosLogOut,
} from "react-icons/io";
import ProfileDropdown from "../ProfileDropdown";
import logo from "../../../Images/NavLogo.png";
import { AuthContext } from "../../../Authentications/Authenticate/UserContext";
import { Link } from "react-router-dom";
import UserNavMenu from "./UserNavMenu";
import AdminNavMenu from "./AdminNavMenu";
import ManagerNavMenu from "./ManagerNavMenu";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <nav className="flex justify-between items-center relative">
        <div className="flex justify-center items-center">
          <img className="w-8 h-8 rounded-full" src={logo} alt="" />
          <p className="font-mono px-2 text-green-500 font-semibold">
            MessMeal
          </p>
        </div>
        {/* <UserNavMenu/> */}
        {/* <AdminNavMenu/> */}
        <ManagerNavMenu/>
      </nav>
      {/* {clicked && <ProfileDropdown />} */}
    </>
  );
};

export default Navbar;
