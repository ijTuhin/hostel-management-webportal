import React from "react";
import { FaCartPlus } from "react-icons/fa";
const AddItemBtn = () => {
  return (
    <div className="modal-action">
      <a href="#">
        <button className="flex items-center gap-x-2 px-3 py-2 rounded bg-blue-900 hover:bg-blue-800 text-white">
          <span>Add to </span>
          <FaCartPlus />
        </button>
      </a>
    </div>
  );
};

export default AddItemBtn;
