import React, { useState } from "react";
import { Outlet } from "react-router-dom";

export default function OutletBox({outletHeader}) {
  const [show, setShow] = useState(false)
  const [id, setID] = useState(null)
  return (
    <main className="absolute top-16 pl-48 w-full">
      <header className="bg-stone-200 px-5 py-3 sticky z-20 top-16">{outletHeader}</header>
      <section className="bg-white">
        <Outlet context={[show, setShow, id, setID]} />
      </section>
    </main>
  );
}
