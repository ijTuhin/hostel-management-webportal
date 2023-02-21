import React from "react";
import { Link, NavLink } from "react-router-dom";
import UserMenuDropdown from "../Dropdown/UserMenuDropdown";

const UserNavMenu = () => {
  let activeClassName = "underline";
  return (
    <ul className="flex items-center space-x-1">
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <NavLink className={({isActive}) => isActive ? activeClassName : ""} to="/">Home</NavLink>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/order-summary">Order</NavLink>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        Coupon
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <NavLink className={({isActive}) => isActive ? "underline underline-offset-8 text-green-600 decoration-2" : ""} to="/payment-history">Payment</NavLink>
      </li>
      <li className="hover:text-green-500 border-b-2 border-transparent hover:font-extrabold px-2.5 py-1.5">
        <UserMenuDropdown />
      </li>
    </ul>
  );
};

export default UserNavMenu;
