import React from "react";
import logo from "../../../Images/NavLogo.png";
import UserNavMenu from "./UserNavMenu";
import AdminNavMenu from "./AdminNavMenu";
import ManagerNavMenu from "./ManagerNavMenu";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img className="w-8 h-8 rounded-full" src={logo} alt="" />
          <p className="font-mono px-2 text-green-500 font-semibold">
            MessMeal
          </p>
        </div>
        <UserNavMenu/>
        {/* <AdminNavMenu/> */}
        {/* <ManagerNavMenu/> */}
      </nav>
    </>
  );
};

export default Navbar;
