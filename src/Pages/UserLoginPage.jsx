import React from "react";
import { Link } from "react-router-dom";
import UserLogin from "../Authentications/LoginForm/Login/UserLogin";
import LoginLogo from "../Authentications/LoginForm/LoginLogo";

const UserLoginPage = () => {
  return (
    <div className="relative">
      <div className="w-full p-6 text-green-600 text-sm font-mono flex justify-end absolute">
        <Link to="/user-signup">
          <span className="hover:underline px-3 py-1.5">
            Don't have a account?
          </span>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <LoginLogo />
        <UserLogin />
      </div>
    </div>
  );
};

export default UserLoginPage;
