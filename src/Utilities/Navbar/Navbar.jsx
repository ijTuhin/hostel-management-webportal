import React from "react";
import logo from "../../Images/NavLogo.png";
import NavMenu from "./NavMenu";
import LogOut from "../../Authentications/LoginForm/LogOut";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center px-5">
        <div className="flex justify-center items-center px-5">
          <img className="w-8 h-8 rounded-full" src={logo} alt="" />
          <p className="font-mono px-2 text-green-500 font-semibold">
            Hostel Management {/* */}
          </p>
          <span className="border-r px-1 h-6 border-green-400"></span>
          <NavMenu/>
        </div>
        <LogOut/>
      </nav>
    </>
  );
};

export default Navbar;
