import React from "react";
import { GiMeal } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineSummarize, MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Drawer = () => {
  return (
    <div className="shadow-md h-full text-gray-500">
      <ul>
        <li className="px-3 py-2 hover:bg-gray-100">
          <NavLink
            to="/meal"
            className={({ isActive }) => (isActive ? "text-green-700" : "")}
          >
            <p className="flex items-center gap-x-5">
            <GiMeal /> Meal Orders
            </p>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-gray-100">
          <NavLink
            to="/meal/sd"
            className={({ isActive }) => (isActive ? "text-green-700" : "")}
          >
            <p className="flex items-center gap-x-5">
            {/* <SiFampay /> */} <MdPayment/> Payment Status
            </p>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-gray-100">
          <NavLink
            to="/meal/hj"
            className={({ isActive }) => (isActive ? "text-green-700" : "")}
          >
            <p className="flex items-center gap-x-5">
            <FiShoppingCart /> Groceries
            </p>
          </NavLink>
        </li>
        <li className="px-3 py-2 hover:bg-gray-100">
          <NavLink
            to="/meal/hj"
            className={({ isActive }) => (isActive ? "text-green-700" : "")}
          >
            <p className="flex items-center gap-x-5">
            <MdOutlineSummarize /> Summary
            </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
