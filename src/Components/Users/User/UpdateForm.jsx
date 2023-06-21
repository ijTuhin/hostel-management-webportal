import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { token } from "../../../Utilities/Hooks/CommonHooks";

const UpdateForm = ({ item }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState({});
  const updateData = (e) => {
    e.preventDefault();
    fetch(`https://hms-server-side.onrender.com/user/update/${item._id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((value) => {
        navigate("/users/manage-user", { replace: true });
        console.log("DB Success:", value);
      });
  };
  return (
    <div className="w-1/2 py-16">
      {/* <p>Update Form</p> */}
      <form className="space-y-1 w-full">
        <div className="flex gap-x-5">
          <div className="w-full">
            <label className="text-gray-500" htmlFor="itemName">
              User Name
            </label>
            <input
              placeholder={item.name}
              onKeyUp={(e) => {
                setValue({
                  ...value,
                  name: e.target.value,
                });
              }}
              type="text"
              className="w-full block outline-none border-b-2 border-gray-200 text-gray-400 px-2 py-1.5 mb-2"
              name="itemName"
              id="itemName"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-500" htmlFor="marketRate">
              Change Password
            </label>
            <input
              placeholder={item.password}
              className="w-full block outline-none border-b-2 border-gray-200 text-gray-400 px-2 py-1.5 mb-2"
              onKeyUp={(e) => {
                setValue({
                  ...value,
                  password: e.target.value,
                });
              }}
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex gap-x-5">
          <div className="w-full">
            <label className="text-gray-500" htmlFor="marketRate">
              Session
            </label>
            <input
              placeholder={item.current}
              className="w-full block outline-none border-b-2 border-gray-200 text-gray-400 px-2 py-1.5 mb-2"
              onKeyUp={(e) => {
                setValue({
                  ...value,
                  current: e.target.value,
                });
              }}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <label className="text-gray-500" htmlFor="marketRate">
              Semester
            </label>
            <input
              placeholder={item.sem}
              className="w-full block outline-none border-b-2 border-gray-200 text-gray-400 px-2 py-1.5 mb-2"
              onKeyUp={(e) => {
                setValue({
                  ...value,
                  sem: e.target.value,
                });
              }}
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex gap-x-5">
          <div className="w-full">
            <label className="text-gray-500" htmlFor="marketRate">
              Address
            </label>
            <input
              placeholder={item.address}
              className="w-full block outline-none border-b-2 border-gray-200 text-gray-400 px-2 py-1.5 mb-2"
              onKeyUp={(e) => {
                setValue({
                  ...value,
                  address: e.target.value,
                });
              }}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <label className="text-gray-500" htmlFor="marketRate">
              Phone number
            </label>
            <input
              placeholder={item.phone}
              className="w-full block outline-none border-b-2 border-gray-200 text-gray-400 px-2 py-1.5 mb-2"
              onKeyUp={(e) => {
                setValue({
                  ...value,
                  phone: e.target.value,
                });
              }}
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex gap-x-5">
          <div className="w-full">
            <label className="text-gray-500" htmlFor="marketRate">
              District
            </label>
            <input
              placeholder={item.district}
              className="w-full block outline-none border-b-2 border-gray-200 text-gray-400 px-2 py-1.5 mb-2"
              onKeyUp={(e) => {
                setValue({
                  ...value,
                  district: e.target.value,
                });
              }}
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="w-full">
            <label className="text-gray-500" htmlFor="marketRate">
              Thana
            </label>
            <input
              placeholder={item.thana}
              className="w-full block outline-none border-b-2 border-gray-200 text-gray-400 px-2 py-1.5 mb-2"
              onKeyUp={(e) => {
                setValue({
                  ...value,
                  thana: e.target.value,
                });
              }}
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={updateData}
            className="mt-1 px-3 py-1.5 text-sm rounded bg-blue-900 hover:bg-blue-800 text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
