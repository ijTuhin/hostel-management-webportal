import React from "react";
import { Outlet } from "react-router-dom";

export default function OutletBox({outletHeader}) {
  return (
    <main className="pt-1 pl-48 space-y-4">
      <header className="bg-zinc-100 px-5 py-2">{outletHeader}</header>
      <section className="mx-20">
        <Outlet />
      </section>
    </main>
  );
}
