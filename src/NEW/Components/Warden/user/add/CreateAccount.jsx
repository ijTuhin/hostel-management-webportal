import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useAuthUser } from "../../../../../Authentications/Authenticate/UserContext";

export default function CreateAccount() {
  const [error, setError] = useState(<></>);
  const [value, setValue] = useOutletContext();
  const { createUser, CreateUserWithDB } = useAuthUser();
  const navigate = useNavigate();
  function passwordValid(value) {
    const reqex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
    return reqex.test(value);
  }
  console.log(value);
  const handleCreateUser = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    const password = e.target.password.value;
    if (passwordValid(password)) {
      setValue({ ...value, password: password });
      /* CreateUserWithDB(value);
    createUser(value.email, password)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }); */
    }
  };
  return (
    <div className={`w-full space-y-10 flex flex-col items-center pt-[10%]`}>
      <form onSubmit={handleCreateUser} className="flex flex-col w-96 gap-2">
        <input
          className="border-b border-teal-600 outline-transparent px-2 py-1.5 bg-inherit"
          type="password"
          name="password"
          id="password"
          placeholder="Create password"
          onChange={(e) => {
            if (!passwordValid(e.target.value))
              setError(
                <p className="text-end text-[10px] text-red-600 w-full">
                  Password not strong enough!!
                </p>
              );
            else setError(null);
          }}
          required
        />
        {error}
        <button
          className={`border p-3 rounded text-white ${
            error
              ? "bg-teal-800/50 cursor-not-allowed"
              : "bg-teal-800 hover:bg-teal-900"
          }`}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
