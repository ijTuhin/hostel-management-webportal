import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import DropdownBtn from "../../Dropdown/DropdownBtn";
import { token } from "../../../../Hooks/conditionData";

const AddNoticePage = () => {
  const data = [
    { id: 1, label: "All Users" },
    { id: 2, label: "Individual" },
    { id: 3, label: "Warden" },
    { id: 4, label: "Finance" },
  ];
  const [select, setSelect] = useState();
  const [value, setValue] = useState();
  const addStaffData = (e) => {
    e.preventDefault();
    if (select !== "2") {
      value.to = data.find((item) => item.id == select).label;
    }
    if (!value) {
      return false;
    }
    fetch(`http://localhost:3001/notice`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((value) => {
        console.log("DB Success:", value);
        window.location.reload();
      });
    console.log(value, token);
  };
  return (
    <div className="h-full w-full flex justify-center py-28">
      <form className="w-1/2 relative">
        <input
          onChange={(e) => {
            setValue({
              ...value,
              title: e.target.value,
            });
          }}
          type="text"
          placeholder="Enter Title"
          className="outline-none border border-gray-600 w-full px-6 py-2 text-sm font-poppins"
          name=""
          id=""
        />
        <fieldset className="border border-gray-600 px-5">
          <legend className="px-2">Notice Body</legend>
          <textarea
            onChange={(e) => {
              setValue({
                ...value,
                notice: e.target.value,
              });
            }}
            className="outline-none border-0 w-full px-1 py-2 text-sm font-poppins"
            placeholder="200 characters only..."
            rows="6"
            name="comment"
            form="usrform"
          />
        </fieldset>
        <div className="flex justify-end gap-x-3">
          <div className="absolute -top-12 w-full">
            <div className="w-full flex justify-start items-start gap-x-2">
              <input
                onChange={(e) => {
                  setValue({
                    ...value,
                    to: e.target.value,
                  });
                }}
                onClick={(e) => {
                  setValue({
                    ...value,
                    to: e.target.value,
                  });
                }}
                type="text"
                placeholder="matric ID"
                className={`${
                  select === "2" ? "visible" : "invisible"
                } outline-none border border-gray-600 w-full px-6 py-2 text-sm font-poppins`}
                name=""
                id=""
              />
              <div className="flex justify-center items-start gap-x-2 mt-3.5">
                <p>To:</p>
                <DropdownBtn setSelect={setSelect} data={data} />
              </div>
            </div>
          </div>
        </div>
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
