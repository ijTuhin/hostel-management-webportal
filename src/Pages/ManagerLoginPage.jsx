import React from "react";
import ManagerLogin from "../Authentications/LoginForm/Login/ManagerLogin";
import LoginLogo from "../Authentications/LoginForm/LoginLogo";

const ManagerLoginPage = () => {
  return (
    <div className="flex justify-center items-center">
      <LoginLogo />
      <ManagerLogin/>
    </div>
  );
};

export default ManagerLoginPage;
