import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Signup from "../../../Authentications/SignupForms/Signup";
import bgLogo from "../../../Images/signup-I.jpg";
import { AuthContext } from "../../../Authentications/Authenticate/UserContext";

const Create = ({ setSignupData, signupData, setCreateAcc }) => {
  const data = signupData;
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.displayName.value;
    createUser(email, password, displayName)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signup Successfull: ", user);
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className='w-full h-full flex justify-center p-40 space-y-4 bg-gray-50'>
      <form
        onSubmit={handleCreateUser} className="flex flex-col w-96 gap-4">
          <input
            className="border-b border-teal-600 outline-transparent px-2 py-1.5 bg-inherit"
            type="text"
            name="displayName"
            id="username"
            placeholder="Username"
            required
          />
          <input
            className="border-b border-teal-600 outline-transparent px-2 py-1.5 bg-inherit"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
          />
          <input
            className="border-b border-teal-600 outline-transparent px-2 py-1.5 bg-inherit"
            type="password"
            name="password"
            id="password"
            placeholder="Create password"
            required
          />
          <button
            className="border p-3 bg-teal-600 rounded text-white hover:bg-teal-700"
          >
            Create Account
          </button>
      </form>
    </div>
  );
};

export default Create;
