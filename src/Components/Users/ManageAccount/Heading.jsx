import React from "react";
import SortingDropdown from "./SortingDropdown";

const Heading = ({ total }) => {
  return (
    <div className="flex justify-between items-center px-2">
      <div className="flex gap-3 font-medium">
        <p>Total students: </p>
        <p>{total}</p>
      </div>
      <SortingDropdown />
    </div>
  );
};

export default Heading;
