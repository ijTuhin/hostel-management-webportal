import React from "react";
import { useOutletContext } from "react-router-dom";

export default function ModalView({ modalComponent }) {
  const [open, setOpen] = useOutletContext();
  return (
    <section
      className={`bg-slate-900 w-[500px] px-5 py-5 rounded text-gray-200 font-poppins space-y-3 absolute left-[38%] top-[10%] z-[1305] ${
        open ? "block" : "hidden"
      }`}
    >
      {modalComponent}
      <div className="flex justify-end">
        <button
          onClick={() => setOpen(false)}
          className="px-3 py-2 rounded text-xs hover:text-teal-400"
        >
          Close
        </button>
      </div>
    </section>
  );
}
