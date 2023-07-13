import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../Authenticate/UserContext";

const LoginForm = () => {
  const { signIn, AdminLoginWithDB } = useAuthUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then(() => {
        AdminLoginWithDB(email, password);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <form onSubmit={handleLogin} className="grid grid-cols-1 w-[20rem]">
      <input
        className="border-b border-green-600 outline-transparent px-2 py-1.5"
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        required
      />
      <input
        className="border-b border-green-600 outline-transparent px-2 py-1.5 mt-3"
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        required
      />
      <div className="flex justify-start pt-2">
        <button
          type="button"
          onClick={() => {
            /*  */
          }}
          className="p-1 text-xs text-green-600 hover:underline"
        >
          Forgot password?
        </button>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="border px-3 py-1 border-green-600 rounded text-green-600 hover:text-white hover:bg-green-600"
        >
          Log in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
