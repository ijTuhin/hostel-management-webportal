import React from "react";
import { NavLink } from "react-router-dom";

const SecondaryNavbar = ({ item }) => {
    const grid = "grid-cols-"+item.length
  return (
    <nav className={`w-full text-gray-200 ${item.length === 2 ? "flex justify-center" : "grid"} ${grid} text-center gap-x-[0.05rem]`}>
      {item.map((i) => {
        return <NavLink
          to={i.route}
          className={({ isActive }) =>
            isActive
              ? `border-2 border-b-0 py-5 mx-0.5 ${i.activeStyle}`
              : `py-5 ${i.style}`
          }
        >
          {i.title}
        </NavLink>
      })}
    </nav>
  );
};

export default SecondaryNavbar;
