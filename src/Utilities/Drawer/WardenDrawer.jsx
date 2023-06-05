import React from "react";
import { GiMeal } from "react-icons/gi";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineSummarize, MdPayment } from "react-icons/md";
import { NavLink } from "react-router-dom";

const WardenDrawer = () => {
  return (
    <ul>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/warden/room-allocation"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <GiMeal /> Room Allocation
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/warden/rent-status"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <MdPayment /> Rent Status
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/warden/seat-details"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <FiShoppingCart /> Seat Details
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/warden/utility-bills"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <MdOutlineSummarize /> Utility bills
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/warden/attendance"
          className={({ isActive }) => (isActive ? "text-green-700" : "")}
        >
          <p className="flex items-center gap-x-5">
            <MdOutlineSummarize /> Attendance
          </p>
        </NavLink>
      </li>
    </ul>
  );
};

export default WardenDrawer;
