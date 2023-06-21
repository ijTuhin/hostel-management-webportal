import React, { useEffect, useState } from "react";
import { TbSearch } from "react-icons/tb";
import { useOutletContext } from "react-router-dom";
import { token } from "../../../Utilities/Hooks/CommonHooks";
const SearchBar = ({ search }) => {
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
      if (isMatric(input)) {
        entity = "matric";
      } else {
        entity = "name";
      }
      fetch(
        `https://hms-server-side.onrender.com/user/search?${entity}=${input}`,
        { headers: { Authorization: `Beared ${token}` } }
      )
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        });
    }
  };
  if (search && !input) {
    fetch(`https://hms-server-side.onrender.com/user/search?matric=${search}`, {
      headers: { Authorization: `Beared ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }

  return (
    <div
      className={`w-96 flex items-center gap-x-2 border rounded-full py-2 px-3 ${
        isActive
          ? "text-green-500 border-2 border-green-500"
          : "text-gray-600 border-gray-400"
      }`}
      onClick={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <TbSearch />
      <input
        onKeyUp={handleInput}
        onClick={() => (search = null)}
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
