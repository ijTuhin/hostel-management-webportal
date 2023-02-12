import React from "react";
import { IoIosLogOut } from "react-icons/io";
import LogOut from "../../Authentications/LoginForm/LogOut";

const ProfileDropdown = () => {
  return (
    <div className="border-0 text-gray-200 text-sm bg-gray-800 rounded rounded-tr-none absolute top-14 right-6">
      <button className="pl-3 pr-5 py-2.5 hover:bg-yellow-600 pb-1">
        View Profile
      </button>
      <div className="border w-full border-gray-600"></div>
      <LogOut/>
    </div>
  );
};

export default ProfileDropdown;
