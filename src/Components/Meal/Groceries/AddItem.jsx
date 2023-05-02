import React from "react";
import AddItemBtn from "./AddItemBtn";
import { FaPlus } from "react-icons/fa";
import AddItemForm from "./AddItemForm";

const AddItem = () => {
  return (
    <>
      {/* The button to open modal */}
      <a
        href="#my-modal-2"
        className="w-full flex justify-end border-t border-blue-900/50 px-1 py-1"
      >
        <button className="flex items-center gap-x-2 px-3 py-2 rounded bg-blue-900 hover:bg-blue-800 text-white">
          <span>Add new </span>
          <FaPlus />
        </button>
      </a>
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <AddItemForm/>
          <AddItemBtn />
        </div>
      </div>
    </>
  );
};

export default AddItem;
