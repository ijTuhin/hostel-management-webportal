import React from "react";
import ManagerLogin from "../Authentications/LoginForm/Admin/ManagerLogin";
import LoginLogo from "../Authentications/LoginForm/LoginLogo";

const ManagerLoginPage = () => {
  return (
    <div className="relative">
      <div className="w-full p-6 text-green-600 text-sm font-mono flex justify-end absolute">
        
      </div>
      <div className="flex justify-center items-center">
        <LoginLogo/>
        {/* Form */}
        <ManagerLogin />
      </div>
    </div>
  );
};

export default ManagerLoginPage;
