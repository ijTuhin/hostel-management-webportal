import React, { useState } from "react";
import { FaHouseUser } from "react-icons/fa";

const ResidenceUserLogin = () => {
  return (
    <div className="flex justify-center mt-[10%]">
      <div className="border-0 shadow-lg space-y-3 bg-white pb-16 pt-12 px-16 w-96">
        <div className="flex justify-start items-center gap-x-2 text-xl font-bold font-serif"><span><FaHouseUser/></span> Residence Login</div>
        <form
          action=""
          className="flex flex-col"
        >
          <input
            className="border-b-2 border-slate-500 px-2 py-1"
            type="text"
            name=""
            id=""
            placeholder="Enter your gsuit"
          />
          <input
            className="border-b-2 border-slate-500 px-2 py-1"
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <div className="flex justify-end mt-2.5 gap-x-1 items-end">
            <input type="checkbox" name="" id="" />
            <p className="text-xs">Forgot Password?</p>
          </div>
          <button className="border-0 w-full bg-slate-600 hover:bg-slate-800 text-gray-200 rounded mt-2.5 px-3 py-1.5">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResidenceUserLogin;
