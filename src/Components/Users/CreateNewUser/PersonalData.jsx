import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";

const PersonalData = () => {
  const [value, setValue] = useOutletContext();
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const enrolled = d.getDate() + "/" + month + "/" + d.getFullYear();
  const updateData = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full h-full py-28 px-40  bg-gray-50">
      <form className="space-y-1 flex justify-end items-end border-t-2 border-teal-600">
        <div className="space-y-5 py-3.5">
          <div>
            <p className="text-xl font-semibold font-serif text-teal-600">
              Personal Information
            </p>
            <p className="text-sm text-gray-400">
              (For emergency, community, forum, etc.)
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <input hidden value={enrolled} name="enrollDate" onChange={updateData} />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-96 rounded"
              placeholder="Phone number"
              name="phone"
              onChange={updateData}
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-96 rounded"
              placeholder="District"
              name="district"
              onChange={updateData}
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-96 rounded"
              placeholder="Thana"
              name="thana"
              onChange={updateData}
            />
            <input
              className="border-2 border-slate-300 outline-teal-500 bg-white px-2 py-1.5 w-96 rounded"
              placeholder="Address"
              name="address"
              onChange={updateData}
            />
          </div>
        </div>
        <div className="w-full flex justify-end pb-3 gap-x-2">
          <button className="border-2 rounded-md px-4 py-1.5 bg-gray-400 hover:bg-gray-500 text-gray-50">
            <NavLink to="/users/create/academic">Cancel</NavLink>
          </button>
          <button type="button" className="border-2 rounded-md px-6 py-1.5 bg-teal-600 hover:bg-teal-700 text-white">
            <NavLink to="/users/create/overview">Next</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
