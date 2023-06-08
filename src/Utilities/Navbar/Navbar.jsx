import React from "react";
import logo from "../../Images/NavLogo.png";
import NavMenu from "./NavMenu";
import LogOut from "../../Authentications/LoginForm/LogOut";
import ResponsiveNavbar from "./ResponsiveNavbar";
const Navbar = () => {
  let i = 1;
  const role = localStorage.getItem("admin-role");
  if (role === "meal") i = null;
  return (
    <>
      <nav className="lg:hidden flex justify-between items-center px-3.5">
        <div className="flex justify-center items-center">
          <img className="w-8 h-8 rounded-full" src={logo} alt="" />
          <p className="font-mono px-2 text-green-500 font-semibold">
            Hostel Management {/* */}
          </p>
        </div>
        <ResponsiveNavbar i={i} role={role} />
      </nav>
      <nav className="hidden lg:flex justify-between items-center px-5">
        <div className="flex justify-center items-center px-5">
          <img className="w-8 h-8 rounded-full" src={logo} alt="" />
          <p className="font-mono px-2 text-green-500 font-semibold">
            Hostel Management {/* */}
          </p>
          <span className="border-r px-1 h-6 border-green-400"></span>
          <NavMenu i={i} role={role} />
        </div>
        <div className="hover:bg-green-600 border rounded-md border-green-500 hover:text-white text-green-600 hover:decoration-2 px-2.5 py-1.5">
          <LogOut />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
