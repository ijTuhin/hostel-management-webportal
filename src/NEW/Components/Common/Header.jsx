import React from "react";
import logo from "../../../Images/NavLogo.png";
import { useNavigate } from "react-router-dom";
import LogOut from "../Login/LogOut";

export default function Header({ title }) {
  const navigate = useNavigate();
  return (
    <nav className="w-screen p-4 bg-slate-900 text-sm text-gray-500 flex justify-between items-center z-30 fixed top-0">
      <div className="flex items-center gap-1">
        <img className="w-8 h-8 rounded-full" src={logo} alt="" />
        <p className="font-handlee font-semibold text-xl mt-[3px]">Ostello</p>
      </div>
      <div className="flex items-center px-5">
        <LogOut />
      </div>
    </nav>
  );
}
