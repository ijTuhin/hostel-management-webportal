import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth, user } from '../../../firebase.config';
import { AuthContext } from "../Authenticate/UserContext";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = ({ setSignupData, signupData, setCreateAcc }) => {
  const data = signupData;
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleDataUpload = () => {
    //
  };

  const handleSignup = (e) => {
    e.preventDefault();
    /* ************************************ */
    fetch("http://localhost:5000/non-residence-student-registration", {
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
    /* ************************************ */

    
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
    <div className="space-y-8">
      <p className="title text-green-600 text-3xl font-mono">
        <span className="text-4xl">C</span>reate <br />
        new account !!!
      </p>
      <form
        onSubmit={handleSignup}
        className="grid grid-cols-1 space-y-3 w-[20rem]"
      >
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
        <div className="flex justify-between items-center pt-2">
          <button
            type="button"
            onClick={() => {
              setSignupData(null);
              setCreateAcc(false);
            }}
            className="flex items-center gap-x-2 text-green-600 hover:text-green-700"
          >
            <AiOutlineArrowLeft />
            <span className="-mt-0.5">Back</span>
          </button>
          <button
            onClick={handleDataUpload}
            type="submit"
            className="border px-3 py-1 border-green-600 rounded text-green-600 hover:text-white hover:bg-green-600"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
