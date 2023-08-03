import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { role } from "../../Hooks/conditionData";
import { ImQrcode } from "react-icons/im";

export default function OutletBox({ outletHeader }) {
  const [show, setShow] = useState(false);
  const [id, setID] = useState(null);
  const [record, setRecord] = useState(null);
  return (
    <main className="absolute top-16 pl-48 w-full">
      <header
        className={`bg-stone-200 px-5 py-3 sticky z-20 top-16 capitalize ${
          role !== "accountant" && "flex justify-between items-center"
        }`}
      >
        <p>{role} Panel</p>
        {role !== "accountant" && (
          <NavLink to="/qr-scanner" className="px-5 text-xl hover:text-2xl">
            <ImQrcode />
          </NavLink>
        )}
      </header>
      <section className="bg-white">
        <Outlet context={[show, setShow, id, setID, record, setRecord]} />
      </section>
    </main>
  );
}
