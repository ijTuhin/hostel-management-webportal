import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
const TableData = ({ item }) => {
  return (
    <>
      <div className="grid grid-cols-2">
        <p className="text-center">
          <span>{item.amount} </span><span>of {item.name}</span>
        </p>
        <p className="text-left">
          = <span>{item.cost}</span>/- <span>(rate. {item.rate}/-)</span>
        </p>
      </div>
    </>
  );
};

export default TableData;
