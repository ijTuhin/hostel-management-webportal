import React from "react";
import { RxCaretSort } from "react-icons/rx";

const SortingDropdown = () => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0}>
        <p className="flex gap-x-1 justify-center items-center text-lg cursor-pointer px-2 py-1.5 hover:bg-stone-100 rounded">
          <span className="text-base">Sort</span>
          <RxCaretSort />
        </p>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content rounded-tr-none text-sm shadow bg-gray-50 rounded w-32"
      >
        <li className="hover:rounded-tl hover:bg-gray-200 py-0.5 px-1.5 w-full border-b">
          <button className="cursor-pointer py-1 px-1.5">Default</button>
        </li>
        <li className="hover:rounded-tl hover:bg-gray-200 py-0.5 px-1.5 w-full border-b">
          <button className="cursor-pointer py-1 px-1.5">Room No.</button>
        </li>
        <li className="hover:bg-gray-200 py-0.5 px-1.5 w-full border-b">
          <button className="cursor-pointer py-1 px-1.5">Department</button>
        </li>
        <li className="hover:bg-gray-200 py-0.5 px-1.5 w-full border-b">
          <button className="cursor-pointer py-1 px-1.5">Payment</button>
        </li>
        <li className="hover:rounded-b hover:bg-gray-200 py-0.5 px-1.5 ">
          <button className="cursor-pointer py-1 px-1.5">
            Enrollment Date
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SortingDropdown;
