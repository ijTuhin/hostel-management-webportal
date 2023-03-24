import React from "react";
import SearchBar from "./SearchBar";
import SortingDropdown from "./SortingDropdown";

const Heading = ({ total }) => {
  return (
    <div className="flex justify-between items-end">
      {/* <div className="flex gap-3 font-medium px-2">
        <p>Total Accounts: </p>
        <p>{total}</p>
      </div> */}
      <SearchBar/>
      <SortingDropdown />
    </div>
  );
};

export default Heading;
