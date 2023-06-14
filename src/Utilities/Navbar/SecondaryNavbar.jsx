import React from "react";
import { NavLink } from "react-router-dom";

const SecondaryNavbar = ({ item, center }) => {
  item.map((i) => {
    return console.log(i.route.split("/")[2]);
  });
  const grid = "grid-cols-" + item.length;
  return (
    <div className={`w-full text-gray-200 ${center && "flex justify-center"}`}>
      <nav
        className={`${
          center ? "w-1/2 flex justify-center" : "w-full grid"
        } ${grid} text-center gap-x-[0.05rem]`}
      >
        {item.map((i) => {
          if (i.route.split("/")[2])
            return (
              <NavLink
                to={i.route}
                className={({ isActive }) =>
                  isActive
                    ? `border-2 border-b-0 py-5 mx-0.5 ${i.activeStyle}`
                    : `py-5 ${i.style}`
                }
              >
                {i.title}
              </NavLink>
            );
          else
            return (
              <NavLink
                to={i.route}
                className={({ isActive }) =>
                  isActive
                    ? `border-2 border-b-0 py-5 mx-0.5 ${i.activeStyle}`
                    : `py-5 ${i.style}`
                }
                end
              >
                {i.title}
              </NavLink>
            );
        })}
      </nav>
    </div>
  );
};

export default SecondaryNavbar;
