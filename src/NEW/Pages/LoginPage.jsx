import React from "react";
import GoogleLogin from "../Components/Login/GoogleLogin";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../Images/NavLogo.png";

export default function LoginPage() {
  return (
    <main className="bg-slate-900 h-screen w-screen flex justify-center">
      <div className="w-full flex flex-col justify-start">
        <header className="text-gray-400 flex justify-between text-sm font-medium p-5">
          <div className="flex items-center gap-1">
            <img className="w-8 h-8 rounded-full" src={logo} alt="" />
            <p className="font-handlee font-semibold text-xl mt-[3px]">
              Ostello
            </p>
          </div>
          <nav className="flex justify-end">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "border px-3 py-2 rounded-lg rounded-tr-none rounded-br-none border-green-500 text-green-800 bg-green-500 border-l-0"
                  : "border px-3 py-2 rounded-lg rounded-tr-none rounded-br-none border-gray-600 text-gray-600"
              }
            >
              Admin
            </NavLink>
            <NavLink
              to="/login/non-admin"
              className={({ isActive }) =>
                isActive
                  ? "border px-3 py-2 rounded-lg rounded-tl-none rounded-bl-none border-green-500 text-green-800 bg-green-500 border-l-0"
                  : "border px-3 py-2 rounded-lg rounded-tl-none rounded-bl-none border-gray-600 text-gray-600"
              }
            >
              non-Admin
            </NavLink>
          </nav>
        </header>
        <section className="px-10 flex justify-center">
          <Outlet />
        </section>
      </div>
    </main>
  );
}
