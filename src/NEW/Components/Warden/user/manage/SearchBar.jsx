import React, { useState } from "react";
import { TbSearch } from "react-icons/tb";
const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(true);
  };
  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <div className={`w-96 flex items-center gap-x-2 border rounded-full py-2 px-3 ${
        isActive
          ? "text-green-500 border-green-400"
          : "text-gray-600 border-gray-400"
      }`} onClick={handleClick} onBlur={handleBlur}>
      <TbSearch />
      <input
        type="search"
        className="outline-none text-sm w-full text-green-500 bg-transparent"
        placeholder="search account"
        name=""
        id="searchAcc"
      />
    </div>
  );
};

export default SearchBar;
