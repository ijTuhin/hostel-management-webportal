import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import DropdownBtn from "../../../Utilities/Dropdown/DropdownBtn";
import { useOutletContext } from "react-router-dom";

const AddNoticePage = () => {
  const [select, setSelect] = useState();
  const [value, setValue] = useState();
  const addStaffData = (e) => {
    if (!value) {
      return false;
    }
    /* fetch(`http://localhost:3001/staff`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
      }); */
    console.log(value);
  };
  return (
    <div className="h-full w-full flex justify-center py-28">
      <form className="w-1/3 relative">
        <div className="flex justify-end gap-x-3">
          <div className="absolute -top-12 w-full">
            <div className="w-full flex justify-start items-start gap-x-2">
              <input
                onChange={(e) => {
                  setValue({
                    ...value,
                    name: e.target.value,
                  });
                }}
                type="text"
                placeholder="matric ID"
                className={`${
                  select === '1' ? "visible" : "invisible"
                } outline-none border border-gray-600 w-full px-6 py-2`}
                name=""
                id=""
              />
              <div className="flex justify-center items-start gap-x-2">
                <p>To:</p>
                <DropdownBtn setSelect={setSelect} />
              </div>
            </div>
          </div>
        </div>
        <input
          onChange={(e) => {
            setValue({
              ...value,
              name: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter Title"
          className="outline-none border border-gray-600 w-full px-8 py-2"
          name=""
          id=""
        />
        <fieldset className="border border-gray-600 px-5">
          <legend className="px-2">Notice Body</legend>
          <textarea
            className="outline-none border-0 w-full px-3 py-2"
            placeholder="200 characters only..."
            rows="6"
            name="comment"
            form="usrform"
          />
        </fieldset>
        <button
          onClick={addStaffData}
          className={`my-3 flex justify-center items-center gap-x-3 w-full py-2.5 bg-teal-700 text-white ${
            value ? "hover:bg-teal-800" : "cursor-not-allowed"
          }`}
        >
          Upload Notice <IoSend />
        </button>
      </form>
    </div>
  );
};

export default AddNoticePage;
