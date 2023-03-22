import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserDetails = () => {
  return (
    <div className="absolute top-[4.35rem] w-full">
      <nav className="w-full text-gray-200 grid grid-cols-2 text-center gap-x-[0.05rem]">
          <NavLink
            to="/users-detail/students"
            className={({ isActive }) => (isActive ? "bg-emerald-700 py-5" : "bg-teal-700 hover:bg-emerald-700 py-5")}
          >
            Students
          </NavLink>

          <NavLink
            to="/users-detail/guests"
            className={({ isActive }) => (isActive ? "bg-emerald-700 py-5" : "bg-teal-700 hover:bg-emerald-700 py-5")}
          >
            Guests
          </NavLink>
      </nav>
      <Outlet/>
    </div>
  );
};

export default UserDetails;
