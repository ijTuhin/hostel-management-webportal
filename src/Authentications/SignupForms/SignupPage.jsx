import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgLogo from "../../Images/signup-I.jpg";
import Signup from "./Signup";
import UserData from "./UserData";
const SignupPage = () => {
  const [signupData, setSignupData] = useState();
  const [createAcc, setCreateAcc] = useState(false);
  return (
    <div className="relative">
      <div className="w-full p-6 text-green-600 text-sm font-mono flex justify-end absolute">
        <Link to="/user-login">
          <span className="hover:underline px-3 py-1.5">Already a user ?</span>
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[40%] h-screen flex items-center">
          <img src={bgLogo} className="w-[75%]" alt="" />
        </div>
        {/* Form */}
        {createAcc ? (
          <Signup setSignupData={setSignupData} setCreateAcc={setCreateAcc} />
        ) : (
          <UserData setSignupData={setSignupData} setCreateAcc={setCreateAcc} />
        )}
      </div>
    </div>
  );
};

export default SignupPage;
