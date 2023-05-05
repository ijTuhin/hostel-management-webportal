import React from "react";
import { NavLink, useOutletContext } from "react-router-dom";

const Overview = () => {
  const [value, setValue] = useOutletContext();
  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  const enrolled = d.getDate() + "/" + month + "/" + d.getFullYear();
  const updateData = () => {
    setValue({
      ...value,
      enrollDate: enrolled,
    });
  };
  console.log("Overview ",value)
  return (
    <div className="w-full h-full py-14 px-40 space-y-4 bg-gray-50">
      <div className="grid grid-cols-2 border-b border-slate-200 py-3.5">
        <p className="text-xl font-serif text-teal-600">Academic Information</p>
        <div className="flex flex-col gap-y-3">
          <p>
            Name:
            <span className="text-sm text-gray-600 px-2">{value.name}</span>
          </p>
          <p>
            Gsuit: <span className="text-sm text-gray-600 px-2">{value.gsuit}</span>
          </p>
          <div className="flex gap-x-6">
            <p>
              Matric ID:
              <span className="text-sm text-gray-600 px-2">{value.matric}</span>
            </p>
            <p>
              Section: <span className="text-sm text-gray-600 px-2">{value.sem}BF</span>
            </p>
          </div>
          <p>
            Program:
            <span className="text-sm text-gray-600 px-2">{value.dept}</span>
          </p>
          <div className="flex gap-x-6">
            <p>
              Current session:
              <span className="text-sm text-gray-600 px-2">{value.current}</span>
            </p>
            <p>
              Last session: <span className="text-sm text-gray-600 px-2">{value.last}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-b border-slate-200 py-3.5">
        <p className="text-xl font-serif text-teal-600">Personal Information</p>
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-3">
            <p>
              Address:
              <span className="text-sm text-gray-600 px-2">
                {value.address}
              </span>
            </p>
            <div className="flex gap-x-6">
              <p>
                Thana:{value.thana}
                <span className="text-sm text-gray-600 px-2">Chawkbazar</span>
              </p>
              <p>
                District:
                <span className="text-sm text-gray-600 px-2">
                  {value.district}
                </span>
              </p>
            </div>
            <p>
              Phone number:
              <span className="text-sm text-gray-600 px-2">{value.phone}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end gap-x-2">
        <button className="border-2 rounded-md px-6 py-1.5 bg-gray-300 hover:bg-gray-500 text-gray-50">
          <NavLink to="/users/create/academic">Cancel</NavLink>
        </button>
        <button onClick={updateData} type="button" className="border-2 rounded-md px-8 py-1.5 bg-teal-600 hover:bg-teal-700 text-white">
          {/* <NavLink to="/users/create/account">Save</NavLink> */}
        </button>
      </div>
    </div>
  );
};

export default Overview;
