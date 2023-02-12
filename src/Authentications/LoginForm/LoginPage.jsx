import React from 'react'
import bgLogo from "../../Images/login-II.jpg";
import Login from './Login';

const LoginPage = () => {
    return (
      <div className="flex justify-center items-center">
        <div className="w-[40%] h-screen flex items-center">
          <img src={bgLogo} className="w-[75%]" alt="" />
        </div>
        {/* Form */}
        <Login/>
      </div>
    )
  }

export default LoginPage