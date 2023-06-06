import React, { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { useOutletContext } from "react-router-dom";
const SearchBar = () => {
  const [user, setUser] = useOutletContext();
  const [input, setInput] = useState("");
  const [isActive, setIsActive] = useState(false);
  let entity;
  const handleInput = (event) => {
    setInput(event.target.value);
    function isMatric(str) {
      return /[0-9]/.test(str);
    }
    if (event.keyCode == 13) {
      if(isMatric(input)) {entity = 'matric'}
      else {entity = 'name'}
      fetch(`http://localhost:3001/user/search?${entity}=${input}`)
          .then((res) => res.json())
          .then((data) => {
            setUser(data)
          });
    }
  };

  return (
    <div className={`w-96 flex items-center gap-x-2 border rounded-full py-2 px-3 ${
        isActive
          ? "text-green-500 border-2 border-green-500"
          : "text-gray-600 border-gray-400"
      }`} onClick={() => setIsActive(true)} onBlur={() => setIsActive(false)}>
      <TbSearch />
      <input onKeyUp={handleInput}
        type="search"
        className="outline-none text-sm w-full text-gray-700"
        placeholder="search name or matric Id"
        name=""
        id="searchAcc"
      />
    </div>
  );
};

export default SearchBar;
