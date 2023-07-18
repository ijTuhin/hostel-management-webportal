import React from "react";
import { useAuthUser } from "../../../Authentications/Authenticate/UserContext";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
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
    <main className="flex items-center justify-center h-full text-gray-400 py-20 w-1/2">
      <section className="flex flex-col items-end justify-center w-1/2">
        <button className="text-xs text-gray-600 hover:text-gray-400">
          Forgot password?
        </button>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-2">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className="border outline-transparent px-2 py-1.5 bg-transparent"
            type="email"
            name="email"
            id="email"
            placeholder=""
            required
          />
          <label className="" htmlFor="email">
            Password
          </label>
          <input
            className="border outline-transparent px-2 py-1.5 bg-transparent"
            type="password"
            name="password"
            id="password"
            placeholder=""
            required
          />
          <button className="text-green-600 hover:text-green-500 font-medium">
            Sign-in
          </button>
        </form>
      </section>
    </main>
  );
}
