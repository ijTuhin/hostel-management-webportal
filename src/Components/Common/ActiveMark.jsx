import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ActiveMark = () => {
  return (
    <div className="absolute -top-2 right-2 text-xl text-red-500">
      <IoIosCheckmarkCircle />
    </div>
  );
};

export default ActiveMark;
