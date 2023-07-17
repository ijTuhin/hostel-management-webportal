import React from "react";
import logo from "../../../Images/NavLogo.png";

export default function Header({title}) {
  return (
    <nav className="w-screen p-4 bg-slate-900 text-sm text-gray-500 flex justify-between items-center">
      <div className="flex items-center gap-1">
        <img className="w-8 h-8 rounded-full" src={logo} alt="" />
        <p className="italic font-semibold">{title}</p>
      </div>
      <div className="flex items-center">
        <button className="border border-gray-500 rounded-md hover:bg-green-600 hover:border-green-600 hover:text-gray-300 px-3 py-1.5">Sign Out</button>
      </div>
    </nav>
  );
}
