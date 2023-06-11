import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import "../../App.css";

const data = [
  { id: 1, label: "Student" },
  { id: 2, label: "Warden" },
  { id: 3, label: "Finance" },
];

const DropdownBtn = ({setSelect}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    selectedItem == id ? setSelect(null) : setSelect(id);
    console.log(selectedItem, id)
  };
  console.log()
  return (
    <div className="w-28">
      <div
        className="flex pl-4 justify-between gap-x-3 items-center"
        onClick={() => setOpen(!isOpen)}
      >
        <span>
          {selectedItem ? (
            items.find((item) => item.id == selectedItem).label
          ) : (
            <p className="invisible">!</p>
          )}
        </span>
        <span className={`icon ${isOpen && "open"}`}>
          <SlArrowRight />
        </span>
      </div>
      <div
        className={`border-t-[1px] border-green-300 ${
          isOpen ? "visible bg-emerald-700/95 text-white" : "invisible"
        }`}
      >
        {items.map((item) => (
          <div
            className="hover:cursor-pointer hover:bg-emerald-700 border border-green-600 px-3 py-1.5"
            onClick={(e) => handleItemClick(e.target.id)}
            id={item.id}
          >
            <span
              className={`opacity-0 bg-[#91A5BE]  ${
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
