import React from "react";
import { FaCartPlus } from "react-icons/fa";
const AddItemBtn = () => {
  return (
    <button className="flex items-center mt-1.5 gap-x-2 px-3 py-1.5 text-sm rounded bg-blue-900 hover:bg-blue-800 text-white">
      <span>Add to </span>
      <FaCartPlus />
    </button>
  );
};

export default AddItemBtn;
