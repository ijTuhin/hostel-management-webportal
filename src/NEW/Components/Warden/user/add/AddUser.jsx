import React from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { NavLink, useOutletContext } from "react-router-dom";
export default function AddUser() {
  const [value, setValue] = useOutletContext();
  function checkRequiredInput() {
    if (
      value.name?.length &&
      value.email?.length &&
      value.sem?.length &&
      value.matric?.length &&
      value.address?.length &&
      value.phone?.length &&
      value.thana?.length &&
      value.district?.length
    )
      return true;
  }
  const updateData = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <p className="py-2 bg-green-800/10 mb-5 text-sm w-full text-center">
        Insert User Information
      </p>
      <form className="border-0 w-1/2 flex flex-col justify-center">
        <input
          required={true}
          className="border-b  text-[13.6px] border-gray-400  outline-teal-500 bg-white px-2 py-1.5 w-full mb-2"
          name="name"
          onChange={updateData}
          placeholder="Enter name"
        />
        <input
          required={true}
          className="border-b  text-[13.6px] border-gray-400  outline-teal-500 bg-white px-2 py-1.5 w-full mb-2"
          name="email"
          onChange={updateData}
          placeholder="Enter Gsuite"
        />
        <section className="grid grid-cols-2 gap-x-1 w-full pt-8">
          <p className="bg-teal-800/50 text-teal-900 py-2 px-3 mb-2">
            Academic
          </p>
          <p className="bg-teal-800/50 text-teal-900 py-2 px-3 mb-2">
            Personal
          </p>
          <div className="border-0 space-y-3">
            <input
              required={true}
              className="border-b  text-[13.6px] border-gray-400  outline-teal-500 bg-white px-2 py-1.5 w-full"
              name="matric"
              onChange={updateData}
              placeholder="Matric ID"
            />
            <input
              required={true}
              className="border-b  text-[13.6px] border-gray-400  outline-teal-500 bg-white px-2 py-1.5 w-full"
              name="sem"
              onChange={updateData}
              placeholder="Semester"
            />
            <select
              name="program"
              onChange={(e) => {
                setValue({
                  ...value,
                  program: e.target.value,
                });
              }}
              id="program"
              className="border-b text-[13.6px] border-gray-400  bg-white px-2 py-[0.415rem] w-full"
            >
              <option value="Bachelor's">Bachelor's</option>
              <option value="Master's">Master's</option>
            </select>
            <select
              name="dept"
              onChange={(e) => {
                setValue({
                  ...value,
                  dept: e.target.value,
                });
              }}
              id="dept"
              className="border-b text-[13.6px] border-gray-400  bg-white px-2 py-[0.41rem] w-full"
            >
              <option value="CSE">CSE</option>
              <option value="Pharmacy">PHARMACY</option>
              <option value="EEE">EEE</option>
              <option value="BBA">BBA</option>
              <option value="EB">EB</option>
              <option value="ELL">ELL</option>
              <option value="DIS">DIS</option>
            </select>
          </div>
          <div className="border-0 space-y-3">
            <input
              required={true}
              className="border-b text-[13.6px] border-gray-400  outline-teal-500 bg-white px-2 py-1.5 w-full"
              placeholder="Phone number"
              name="phone"
              onChange={updateData}
            />
            <input
              required={true}
              className="border-b text-[13.6px] border-gray-400  outline-teal-500 bg-white px-2 py-1.5 w-full"
              placeholder="District"
              name="district"
              onChange={updateData}
            />
            <input
              required={true}
              className="border-b text-[13.6px] border-gray-400  outline-teal-500 bg-white px-2 py-1.5 w-full"
              placeholder="Thana"
              name="thana"
              onChange={updateData}
            />
            <input
              required={true}
              className="border-b text-[13.6px] border-gray-400  outline-teal-500 bg-white px-2 py-1.5 w-full"
              placeholder="Address"
              name="address"
              onChange={updateData}
            />
            <button className="w-full flex justify-end items-center gap-x-1 text-gray-400 hover:text-teal-700">
              <p className="mt-0.5">
                <HiOutlineArrowLongRight />
              </p>
              {checkRequiredInput() ? (
                <NavLink to="/user/add/new">Continue</NavLink>
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </section>
      </form>
    </>
  );
}
