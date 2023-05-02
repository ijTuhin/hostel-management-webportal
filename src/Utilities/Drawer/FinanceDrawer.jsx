import React from "react";
import { GiMeal } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineSummarize, MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";

const FinanceDrawer = () => {
  return (
    <ul>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/finance-management"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <GiMeal /> Meal Bill
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/finance-management/sd"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <MdPayment /> Seat Rent
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/finance-management/hj"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <FiShoppingCart /> Grocery Cost
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/finance-management/hj"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <FiShoppingCart /> Utility bills
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/finance-management/hj"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <FiShoppingCart /> Salaries
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/finance-management/hj"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <FiShoppingCart /> Balance Sheet
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/finance-management/hj"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <MdOutlineSummarize /> Summary
          </p>
        </NavLink>
      </li>
    </ul>
  );
};

export default FinanceDrawer;
