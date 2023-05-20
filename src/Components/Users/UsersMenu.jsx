import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UsersMenu = () => {
  return (
    <nav className="w-full text-gray-200 grid grid-cols-4 text-center gap-x-[0.05rem]">
      <NavLink
        to="/users/create"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-teal-800 border-2 border-b-0 border-teal-600 py-5 mx-0.5"
            : "bg-teal-700 hover:bg-teal-800 py-5"
        }
      >
        Create new
      </NavLink>

      <NavLink
        to="/users/detail"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-teal-800 border-2 border-b-0 border-teal-600 py-5 mx-0.5"
            : "bg-teal-600 hover:bg-teal-800 py-5"
        }
      >
        User Details
      </NavLink>

      <NavLink
        to="/users/manage-user"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-teal-800 border-2 border-b-0 border-teal-600 py-5 mx-0.5"
            : "bg-teal-700 hover:bg-teal-800 py-5"
        }
      >
        Manage User
      </NavLink>

      {/* <NavLink
        to="/users/non-residents"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-teal-800 border-2 border-b-0 border-teal-600 py-5 mx-0.5"
            : "bg-teal-600 hover:bg-teal-800 py-5"
        }
      >
        Non-residents
      </NavLink> */}

      {/* <NavLink
        to="/users/manage-account"
        className={({ isActive }) =>
          isActive
            ? "bg-white text-teal-800 border-2 border-b-0 border-teal-600 py-5 mx-0.5"
            : "bg-teal-700 hover:bg-teal-800 py-5"
        }
      >
        Manage Account
      </NavLink> */}

      <NavLink
        to="/users/anonymous-feedback"
        className={({ isActive }) =>
          isActive
            ? "bg-emerald-100 text-teal-800 border-2 border-b-0 border-teal-600 py-5 mx-0.5"
            : "bg-teal-600 hover:bg-teal-800 py-5"
        }
      >
        Feedback
      </NavLink>
    </nav>
  );
};

export default UsersMenu;
