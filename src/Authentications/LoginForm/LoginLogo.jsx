import React from "react";
import bgLogo from "../../Images/login-II.jpg";

const LoginLogo = () => {
  return (
    <div className="w-[40%] h-screen flex items-center">
      <img src={bgLogo} className="w-[75%]" alt="" />
    </div>
  );
};

export default LoginLogo;
