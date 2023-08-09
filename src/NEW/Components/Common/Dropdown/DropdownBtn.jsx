import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import "../../../../App.css";

const DropdownBtn = ({ setSelect, data }) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    selectedItem == id ? setSelect(null) : setSelect(id);
    console.log(selectedItem, id);
  };
  console.log();
  return (
    <div className="w-28">
      <div
        className="flex px-2 justify-between gap-x-3 items-center"
        onClick={() => setOpen(!isOpen)}
      >
        <span className="text-sm text-gray-400 mt-[1px]">
          {selectedItem ? (
            items.find((item) => item.id == selectedItem).label
          ) : (
            <p className="invisible">!</p>
          )}
        </span>
        <span className={`icon ${isOpen && "open"} mt-[2px]`}>
          <SlArrowRight />
        </span>
      </div>
      <div
        className={`border-t-[1px]  ${
          isOpen ? "block bg-stone-100 text-gray-600" : "hidden"
        }`}
      >
        {items.map((item,index) => (
          <div key={index}
            className="hover:cursor-pointer hover:bg-stone-200 border px-3 py-2 text-xs"
            onClick={(e) => {
              handleItemClick(e.target.id);
              setOpen(false);
            }}
            id={item.id}
          >
            <span
              className={`opacity-0 bg-[#fff]  ${
                item.id == selectedItem && "opacity-1"
              }`}
            >
              |
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownBtn;
