import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useAuthUser } from "../../../Authentications/Authenticate/UserContext";

const Create = () => {
  const [value, setValue] = useOutletContext();
  const { createUser, CreateUserWithDB } = useAuthUser();
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setValue({ ...value, password: password });
    CreateUserWithDB(value)
    createUser(email, password)
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="w-full h-full flex justify-center p-40 space-y-4 bg-gray-50">
      <form onSubmit={handleCreateUser} className="flex flex-col w-96 gap-4">
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
        <button className="border p-3 bg-teal-600 rounded text-white hover:bg-teal-700">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Create;
