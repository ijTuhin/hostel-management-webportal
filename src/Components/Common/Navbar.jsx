import React, { useState } from "react";
import { IoMdArrowDropright, IoMdArrowDropdown, IoIosLogOut } from "react-icons/io";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../../Images/NavLogo.png";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <section className="fixed w-full">
      <nav className="flex justify-between p-5 bg-black text-gray-300 font-medium relative">
        <div className="flex justify-center items-center">
            <img className="w-8 h-8 rounded-full" src={logo} alt="" />
            <p className="font-mono px-2 text-green-400 font-semibold">MessMeal</p>
        </div>
        <ul className="flex space-x-5 ">
          <li className="hover:text-yellow-600">Home</li>
          <li className="hover:text-yellow-600">Order Summary</li>
          <li className="hover:text-yellow-600">Coupon List</li>
          <li className="hover:text-yellow-600">Payment History</li>
          <li className="hover:text-yellow-600 flex items-center">
            <span>My Profile</span>
            <button onClick={() => setClicked(!clicked)} className="text-xl">
              { clicked ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
            </button>
          </li>
        </ul>
      </nav>
      {clicked && (
        <ProfileDropdown/>
      )}
    </section>
  );
};

export default Navbar;
