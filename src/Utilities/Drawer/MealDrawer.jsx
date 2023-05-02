import React from "react";
import { GiMeal } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineSummarize, MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MealDrawer = () => {
  return (
    <ul>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/meal/orders"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          <p className="flex items-center gap-x-5">
            <GiMeal /> Meal Orders
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/meal/payment-status"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          <p className="flex items-center gap-x-5">
            {/* <SiFampay /> */} <MdPayment /> Payment Status
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/meal/grocery-list"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          <p className="flex items-center gap-x-5">
            <FiShoppingCart /> Groceries
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/meal/summary"
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          <p className="flex items-center gap-x-5">
            <MdOutlineSummarize /> Summary
          </p>
        </NavLink>
      </li>
    </ul>
  );
};

export default MealDrawer;
