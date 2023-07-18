import React from "react";
import { Outlet } from "react-router-dom";

export default function OutletBox({outletHeader}) {
  return (
    <main className="absolute top-16 pl-48 w-full">
      <header className="bg-stone-200 px-5 py-3 sticky top-16">{outletHeader}</header>
      <section className="bg-white">
        <Outlet />
      </section>
    </main>
  );
}
