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
    <form onSubmit={handleSignup} className="flex flex-col w-80 gap-4">
      <input
        className="border-b border-green-600 outline-transparent px-2 py-1.5"
        type="text"
        name="displayName"
        id="username"
        placeholder="Username"
        required
      />
      <input
        className="border-b border-green-600 outline-transparent px-2 py-1.5"
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        required
      />
      <input
        className="border-b border-green-600 outline-transparent px-2 py-1.5"
        type="password"
        name="password"
        id="password"
        placeholder="Create password"
        required
      />
      <button
        type="submit"
        className="border px-3 py-1 border-green-600 rounded text-green-600 hover:text-white hover:bg-green-600"
      >
        Sign up
      </button>
    </form>
  );
};

export default Create;
