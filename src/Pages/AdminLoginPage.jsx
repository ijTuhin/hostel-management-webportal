import React from "react";
import AdminLogin from "../Authentications/LoginForm/Login/AdminLogin";
import LoginLogo from "../Authentications/LoginForm/LoginLogo";

const AdminLoginPage = () => {
  return (
    <div className="flex justify-center items-center">
      <LoginLogo />
      <AdminLogin />
    </div>
  );
};

export default AdminLoginPage;
