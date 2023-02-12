import React, { useState } from "react";
import bgLogo from "../../Images/signup-I.jpg";
import Signup from "./Signup";
import UserData from "./UserData";
const SignupPage = () => {
  const [signupData, setSignupData] = useState();
  const [createAcc, setCreateAcc] = useState(false);
  return (
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
  );
};

export default SignupPage;
