import React from "react";
import logo from "../../Images/NavLogo.png";
import AdminLogin from "../Components/Login/AdminLogin";

export default function LoginPage() {
  return (
    <main className="bg-slate-900 h-screen w-screen">
      <header className="text-gray-400 flex justify-between text-sm font-medium p-5">
        <div className="flex items-center gap-1">
          <img className="w-8 h-8 rounded-full" src={logo} alt="" />
          <p className="font-handlee font-semibold text-xl mt-[3px]">Ostello</p>
        </div>
      </header>
      <section className="px-10 flex justify-center mt-40">
        <AdminLogin />
      </section>
    </main>
  );
}
