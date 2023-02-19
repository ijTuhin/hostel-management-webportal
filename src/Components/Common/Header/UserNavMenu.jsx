import React from "react";
import { Link } from "react-router-dom";
import ProfileDropdown from "../Utilities/ProfileDropdown";

const UserNavMenu = () => {

  return (
    <ul className="flex items-center space-x-1">
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/order-summary">Order</Link>
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        Coupon
      </li>
      <li className="hover:bg-green-50 hover:text-green-500 border-b-2 border-transparent hover:border-green-500 hover:rounded-b-none rounded-md px-2.5 py-1.5">
        <Link to="/payment-history">Payment</Link>
      </li>
      <li className="hover:text-green-500 border-b-2 border-transparent hover:font-extrabold px-2.5 py-1.5"><ProfileDropdown/></li>
    </ul>
  );
};

export default UserNavMenu;
