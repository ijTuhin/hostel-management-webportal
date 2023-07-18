import React from "react";
import { NavLink } from "react-router-dom";
export default function PrimaryMenu({ menu, set }) {
  return (
    <main className="text-gray-600 fixed bottom-24 px-5 flex flex-col gap-y-3">
      {menu.map((i, index) => {
        return (
          <div
            onClick={() => set(i.name)}
            key={index}
            className="flex justify-start items-center gap-x-3 group"
          >
            <NavLink
              to={i.link}
              className={({ isActive }) =>
                isActive
                  ? "rounded-full flex justify-center items-center w-8 h-8 border-2 border-green-500 text-green-500"
                  : "rounded-full flex justify-center items-center w-8 h-8 border border-gray-600"
              }
            >
              {i.icon}
            </NavLink>
            <span className="text-xs text-gray-600 text-start invisible group-hover:visible">
              {i.name}
            </span>
          </div>
        );
      })}
    </main>
  );
}
