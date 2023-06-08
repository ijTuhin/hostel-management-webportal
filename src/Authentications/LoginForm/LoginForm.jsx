import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Authenticate/UserContext";

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = /* location.state?.from?.pathname || */ "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const value = {
      email,
      password,
    };

    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        /* ************************************ */
        fetch("http://localhost:3001/admin/login", {
          method: "POST", // or 'PUT'
          headers: {
            Authorization: "Bearer my-token",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(value),
        })
          .then((response) => response.json())
          .then((value) => {
            console.log(value.message);
            localStorage.setItem("access-token", value.token);
            localStorage.setItem("admin-role", value.role);
          });
        /* ************************************ */
        navigate(from, { replace: true });
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
