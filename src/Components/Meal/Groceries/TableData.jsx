import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
const TableData = ({ item }) => {
  return (
    <>
      <div className="grid grid-cols-3">
        <p className="capitalize">
        {item.name}
        </p>
        <p className="grid grid-cols-2 gap-x-0">
          <span className="">{item.amount}</span>
          <span className="text-left">{item.unit}</span>
        </p>
        <p className="text-left">
          = <span>{item.price}</span>/- <span>(rate {item.rate}/-)</span>
        </p>
      </div>
    </>
  );
};

export default TableData;
