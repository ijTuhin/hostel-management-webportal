import React from "react";
import { NavLink } from "react-router-dom";
export default function PrimaryMenu({ menu, set }) {
  return (
    <main className="text-gray-600 fixed bottom-1 px-5 flex flex-col gap-y-2 z-40">
      {menu.map((i, index) => {
        return (
          <button
            onClick={() => set(i.name)}
            key={index}
            className="flex justify-start items-center gap-x-3 group hover:text-green-500"
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
          </button>
        );
      })}
      <p className="h-28 border-l border-green-500 ml-3.5"></p>
    </main>
  );
}
