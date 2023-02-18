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
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <nav className="flex justify-between items-center relative">
        <div className="flex justify-center items-center">
          <img className="w-8 h-8 rounded-full" src={logo} alt="" />
          <p className="font-mono px-2 text-green-500 font-semibold">
            MessMeal
          </p>
        </div>
        <ul className="flex space-x-1">
          <li className="hover:bg-yellow-50 hover:text-yellow-500 hover:border-b-2 border-yellow-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:bg-yellow-50 hover:text-yellow-500 hover:border-b-2 border-yellow-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
            <Link to="/order-summary">Order</Link>
          </li>
          <li className="hover:bg-yellow-50 hover:text-yellow-500 hover:border-b-2 border-yellow-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
            Coupon
          </li>
          <li className="hover:bg-yellow-50 hover:text-yellow-500 hover:border-b-2 border-yellow-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
            <Link to="/payment-history">Payment</Link>
          </li>
          <button
            onClick={() => setClicked(!clicked)}
            className="hover:border-b-2 border-transparent text-slate-400 px-2.5 py-1.5 flex items-center"
          >
            <span>My Profile</span>
            <span className="text-xl">
              {clicked ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
            </span>
          </button>
        </ul>
      </nav>
      {clicked && <ProfileDropdown />}
    </>
  );
};

export default Navbar;
