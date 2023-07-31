import React, { useEffect } from "react";
import { useAuthUser } from "../../../Authentications/Authenticate/UserContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const { signIn, authUser, AdminLoginWithDB } = useAuthUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((i) => {
        if (i.user.email) {
          const email = i.user.email;
          AdminLoginWithDB(email);
          navigate("/", { replace: true });
        }
        console.log(i.user.email);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <main className="flex items-center justify-center text-gray-400 w-1/2">
      <section className="flex flex-col items-end justify-center w-1/2">
        <Link to="/login/forget-password" className="text-xs text-gray-600 hover:text-gray-400">
          Forgot password?
        </Link>
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
