import React from "react";
import LoginForm from "../LoginForm";

const ManagerLogin = () => {
  return (
    <div className="space-y-16 border border-green-600 px-10 py-12 rounded-md">
      <p className="text-gray-50 w-full flex justify-center border-0 bg-green-500 text-lg py-3.5">Meal Manager Panel</p>
      <LoginForm/>
    </div>
  );
};

export default ManagerLogin;
