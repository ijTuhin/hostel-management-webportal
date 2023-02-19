import React from "react";
import LoginForm from "../LoginForm";

const AdminLogin = () => {
  return (
    <div className="space-y-8 border border-green-600 px-10 py-12 rounded-md">
      <p className="text-gray-50 w-full flex justify-center border-0 bg-green-500 text-lg py-3.5">Admin Panel</p>
      <LoginForm/>
    </div>
  );
};

export default AdminLogin;
