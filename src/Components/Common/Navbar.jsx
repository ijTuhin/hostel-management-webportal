import React, { useContext, useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown, IoIosLogOut } from "react-icons/io";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../../Images/NavLogo.png";
import { AuthContext } from "../../Authentications/Authenticate/UserContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const {user} = useContext(AuthContext)
  const [clicked, setClicked] = useState(false);
  return (
    <section className="fixed z-10 w-full">
      <nav className="flex justify-between items-center p-5 bg-black text-gray-300 font-medium relative">
        <div className="flex justify-center items-center">
            <img className="w-8 h-8 rounded-full" src={logo} alt="" />
            <p className="font-mono px-2 text-green-500 font-semibold">MessMeal</p>
        </div>
        <ul className="flex space-x-5 ">
          <li className="hover:text-yellow-600"><Link to="/">Home</Link></li>
          <li className="hover:text-yellow-600"><Link to="/order-summary">Order Summary</Link></li>
          <li className="hover:text-yellow-600">Coupon List</li>
          <li className="hover:text-yellow-600">Payment History</li>
          <button onClick={() => setClicked(!clicked)} className="hover:text-yellow-600 flex items-center">
            <span>My Profile</span>
            <span className="text-xl">
              { clicked ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
            </span>
          </button>
        </ul>
      </nav>
      {clicked && (
        <ProfileDropdown/>
      )}
    </section>
  );
};

export default Navbar;
