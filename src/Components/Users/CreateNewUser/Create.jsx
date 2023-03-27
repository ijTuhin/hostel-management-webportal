import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../../../Authentications/SignupForms/Signup";
import bgLogo from "../../../Images/signup-I.jpg";

const Create = () => {
  const [signupData, setSignupData] = useState();
  const [createAcc, setCreateAcc] = useState(false);

  const handleSignup = (e) => {
    /* e.preventDefault();

    fetch("http://localhost:5000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("DB Success:", data);
      });

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
      }); */
  };

  return (
    <div className='w-full h-full flex justify-center p-40 space-y-4 bg-gray-50'>
      <form onSubmit={handleSignup} className="flex flex-col w-96 gap-4">
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
            type="submit"
            className="border p-3 bg-teal-600 rounded text-white hover:bg-teal-700"
          >
            Create Account
          </button>
      </form>
    </div>
  );
};

export default Create;
