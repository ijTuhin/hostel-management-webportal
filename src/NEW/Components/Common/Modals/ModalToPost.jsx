import React from "react";
import { useOutletContext } from "react-router-dom";

export default function ModalToPost({ modalComponent, operate, item }) {
  const [open, setOpen] = useOutletContext();
  return (
    <section
      className={`bg-slate-900 w-[500px] px-5 py-5 rounded text-gray-200 font-poppins space-y-3 absolute left-[38%] top-2 z-[1305] ${
        open ? "block" : "hidden"
      }`}
    >
      {modalComponent}
      <div className="flex justify-end">
        <button
          onClick={() => setOpen(false)}
          className="px-3 py-2 rounded text-xs"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            operate()
            setOpen(false);
          }}
          className="px-3 py-2 rounded bg-teal-500 text-xs text-gray-100 hover:bg-teal-600"
        >
          Confirm
        </button>
      </div>
    </section>
  );
}
