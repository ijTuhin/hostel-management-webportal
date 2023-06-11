import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";

const AcademicData = () => {
  const [value, setValue] = useOutletContext();
  const updateData = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full h-full py-6 px-40 bg-gray-50">
      <form className=" space-y-4">
        <div className="flex justify-between items-center border-b border-slate-200 py-3.5">
          <div>
            <p className="text-xl font-semibold font-serif text-gray-600">
              Student Information
            </p>
            <p className="text-sm text-gray-400">(Individual data)</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              name="name"
              onChange={updateData}
              placeholder="Enter name"
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              name="email"
              onChange={updateData}
              placeholder="Enter Gsuite"
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              name="matric"
              onChange={updateData}
              placeholder="Matric ID"
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              name="sem"
              onChange={updateData}
              placeholder="Semester"
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-slate-200 py-3.5">
          <p className="text-xl font-semibold font-serif text-gray-600">
            Department
          </p>
          <div className="flex flex-col gap-y-3">
            <select
              name="program"
              onChange={(e) => {
                setValue({
                  ...value,
                  program: e.target.value,
                });
              }}
              id="program"
              className="border-2 border-slate-300 outline-teal-500 bg-white p-2 w-80 rounded"
            >
              <option disabled>Choose Program</option>
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
              className="border-2 border-slate-300 outline-teal-500 bg-white p-2 w-80 rounded"
            >
              <option disabled>Choose Department</option>
              <option value="CSE">CSE</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="EEE">EEE</option>
              <option value="BBA">BBA</option>
              <option value="EB">EB</option>
              <option value="ELL">ELL</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between items-center border-b border-slate-200 py-3.5">
          <div>
            <p className="text-xl font-semibold font-serif text-gray-600">
              Academic Session
            </p>
            <p className="text-sm text-gray-400">
              (Current session and the session to complete the program)
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              name="current"
              onChange={updateData}
              placeholder="Current Session"
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-80 rounded"
              name="last"
              onChange={updateData}
              placeholder="Last Session"
            />
          </div>
        </div>
        <div className="w-full flex justify-end">
          <button
            type="button"
            className="border-2 rounded-md px-6 py-1.5 bg-teal-600 hover:bg-teal-700 text-white"
          >
            <NavLink to="/users/create/personal">Next</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcademicData;
