import React, { useState } from "react";
import { useScrollPosition } from "./useScrollPosition";
import { TbSearch } from "react-icons/tb";
import SearchBar from "./SearchBar";
import SortingDropdown from "./SortingDropdown";

const Heading = ({ total, setData }) => {
  const [isActive, setIsActive] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const styles = {
    zIndex: 1300,
  };
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? "justify-end" : "justify-between",
        "flex items-end"
      )}
    >
      <div
        style={styles}
        className={classNames(
          scrollPosition > 0 ? "fixed top-3 right-96" : "",
          ""
        )}
      >
        <div
          className={`w-96 flex items-center gap-x-2 border rounded-full py-2 px-3 ${
            isActive
              ? "text-green-500 border-green-400"
              : "text-gray-600 border-gray-400"
          }`}
          onClick={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        >
          <TbSearch />
          <input
            type="search"
            className="outline-none text-sm w-full text-green-500 bg-transparent"
            placeholder="search account"
            name=""
            id="searchAcc"
            onChange={(e) => {
              if (e.target.value.length === 0)
                setData(total);
              else {
                setData(
                  total.filter((i) => {
                    if (
                      i.matric === e.target.value ||
                      i.name === e.target.value ||
                      i.dept === e.target.value ||
                      i.room.room === parseInt(e.target.value)
                    )
                      return i;
                  })
                );
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
