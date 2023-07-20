import React from "react";
import { wardenMenu } from "../../Hooks/staticData";
import { NavLink, Outlet } from "react-router-dom";

export default function SubOutletBox({ menu }) {
  const [open, setOpen] = React.useState(false);
  const [upload, setUpload] = React.useState(null);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(<></>);
  const grid = "grid-cols-" + menu.length;
  return (
    <>
      <nav
        className={`grid ${grid}  sticky top-28 bg-white pt-4 px-28 font-poppins`}
      >
        {menu.map((i, index) => {
          return (
            <NavLink
              to={i.link}
              key={index}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-slate-900 text-slate-900 font-medium py-3 text-center"
                  : "border-b border-gray-200 text-gray-400 hover:font-medium py-3 text-center"
              }
            >
              {i.name}
            </NavLink>
          );
        })}
      </nav>
      <section className="px-28">
        <Outlet context={[open, setOpen, upload, setUpload, data, setData, error, setError]} />
      </section>
    </>
  );
}
