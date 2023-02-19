import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authenticate/UserContext";

const AdminLogin = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Successfully Logged in!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="space-y-8">
      <p className="text-gray-50 w-full flex justify-center border-0 bg-green-500 text-lg py-3.5">Admin Panel</p>
      {/* <p className="title text-green-600 text-4xl font-mono">Admin Login</p> */}
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
    </div>
  );
};

export default AdminLogin;
