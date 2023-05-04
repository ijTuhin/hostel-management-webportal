import React from "react";
import { FaPlus } from "react-icons/fa";

const AddBillBtn = ({setBillInput}) => {
  return (
    <button onClick={()=>setBillInput(true)} className="flex items-center gap-x-2 px-3 py-2 rounded bg-blue-700 hover:bg-blue-800 text-white">
      <span>Add</span>
      <FaPlus />
    </button>
  );
};

export default AddBillBtn;
