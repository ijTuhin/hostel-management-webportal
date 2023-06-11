import React, { useState } from "react";

const AddNoticePage = () => {
  const [value, setValue] = useState();
  const addStaffData = (e) => {
    if (!value) {
      return false;
    }
    fetch(`http://localhost:3001/staff`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
      });
    console.log(value);
  };
  return (
    <div className="h-full w-full flex justify-center py-20">
      <form className="w-1/3">
        <div className="flex justify-end gap-x-3">
          <input
            onChange={(e) => {
              setValue({
                ...value,
                name: e.target.value,
              });
            }}
            type="text"
            placeholder="Enter name"
            className="invisible outline-none border border-gray-600 w-full px-6 py-2"
            name=""
            id=""
          />
          <div className="flex item-center gap-x-2">
            <p className="mt-2">To:</p>
            <select
              name="dept"
              onChange={(e) => {
                setValue({
                  ...value,
                  dept: e.target.value,
                });
              }}
              id="dept"
              className="border-0 border-gray-600 outline-teal-500 bg-white p-2 rounded"
            >
              <option value=""></option>
              <option value="CSE">CSE</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="EEE">EEE</option>
              <option value="BBA">BBA</option>
              <option value="EB">EB</option>
              <option value="ELL">ELL</option>
            </select>
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
          <legend className="px-2">Enter Notice</legend>
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
          className={`w-full py-2.5 bg-emerald-700 text-white ${
            value ? "hover:bg-emerald-800" : "cursor-not-allowed"
          }`}
        >
          Insert Data
        </button>
      </form>
    </div>
  );
};

export default AddNoticePage;
