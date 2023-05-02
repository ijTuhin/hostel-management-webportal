import React from "react";
import {
  FaUserGraduate,
  FaUser,
  FaUserPlus,
  FaUserCheck,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CreateUserDrawer = () => {
  return (
    <ul className="space-y-2  px-2">
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/users/create/academic"
          className={({ isActive }) =>
            isActive ? "text-green-700 border-green-700" : ""
          }
        >
          <p className="flex items-center gap-x-5">
            <FaUserGraduate /> Academic
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/users/create/personal"
          className={({ isActive }) =>
            isActive ? "text-green-700 border-green-700" : ""
          }
        >
          <p className="flex items-center gap-x-5">
            {/* <SiFampay /> */} <FaUser /> Personal
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/users/create/overview"
          className={({ isActive }) =>
            isActive ? "text-green-700 border-green-700" : ""
          }
        >
          <p className="flex items-center gap-x-5">
            <FaUserCheck /> Overview
          </p>
        </NavLink>
      </li>
      <li className="px-3 py-2 hover:bg-gray-100 border-l-2">
        <NavLink
          to="/users/create/account"
          className={({ isActive }) =>
            isActive ? "text-green-700 border-green-700" : ""
          }
        >
          <p className="flex items-center gap-x-5">
            <FaUserPlus /> Create Acc
          </p>
        </NavLink>
      </li>
    </ul>
  );
};

export default CreateUserDrawer;
