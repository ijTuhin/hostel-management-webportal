import React from "react";
import AdminLogin from "../Authentications/LoginForm/Admin/AdminLogin";
import LoginLogo from "../Authentications/LoginForm/LoginLogo";

const AdminLoginPage = () => {
  return (
    <div className="relative">
      <div className="w-full p-6 text-green-600 text-sm font-mono flex justify-end absolute">
        
      </div>
      <div className="flex justify-center items-center">
        <LoginLogo/>
        {/* Form */}
        <AdminLogin />
      </div>
    </div>
  );
};

export default AdminLoginPage;
