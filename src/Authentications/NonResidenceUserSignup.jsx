import React from "react";
import { FaUserSlash } from "react-icons/fa";

const NonResidenceUserSignup = () => {
  return (
    <div className="flex justify-center mt-[10%]">
      <div className="border-0 shadow-lg space-y-3 bg-white pb-16 pt-12 px-16">
        <div className="flex justify-start items-center gap-x-2 text-xl font-bold font-serif">
          <span>
            <FaUserSlash />
          </span>
          Non-Residence Registration (Student)
        </div>
        <form action="" className="flex flex-col">
          <div className="space-x-2">
            <input
              className="border-b-2 border-slate-500 px-2 py-1"
              type="text"
              name=""
              id=""
              placeholder="Enter your email"
            />
            <input
              className="border-b-2 border-slate-500 px-2 py-1"
              type="text"
              name=""
              id=""
              placeholder="Enter your matric Id"
            />
          </div>
          <div className="space-x-2">
            <input
              className="border-b-2 border-slate-500 px-2 py-1"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
            <input
              className="border-b-2 border-slate-500 px-2 py-1"
              type="password"
              name=""
              id=""
              placeholder="Password"
            />
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <input
              className="border-b-2 border-slate-500 px-2 py-1"
              type="text"
              name=""
              id=""
              placeholder="Enter your batch"
            />
            <div>
              <select
                className="py-1 text-gray-600 border-b-2 border-slate-500"
                name=""
                id=""
              >
                <option value="Choose Your Department">
                  Choose Your Department
                </option>
                <option value="Student">Student</option>
                <option value="Guest">Guest</option>
              </select>
            </div>
          </div>
          <div className="text-gray-600 pt-1.5 pl-1">
            <span>Choose your picture:</span>
            <input className="text-xs pl-1.5" type="file" name="" id="" />
          </div>
          <div className="flex justify-end mt-2.5 gap-x-1 items-end">
            <input type="checkbox" name="" id="" />
            <p className="text-xs">Guest?</p>
          </div>
          <button className="border-0 w-full bg-slate-600 hover:bg-slate-800 text-gray-200 rounded mt-2.5 px-3 py-1.5">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default NonResidenceUserSignup;
