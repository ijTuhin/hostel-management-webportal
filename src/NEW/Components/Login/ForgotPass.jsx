import React from "react";
import { useAuthUser } from "../../../Authentications/Authenticate/UserContext";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPass() {
  const { resetPasswordRequest } = useAuthUser();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    resetPasswordRequest(email)
      .then((i) => {
        console.log(email);
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <main className="flex items-center justify-center text-gray-400 w-1/2">
      <section className="flex flex-col items-end justify-center gap-y-8 w-1/2">
        <Link to="/login" className="text-xs text-gray-600 hover:text-gray-400">
          Remember Password?
        </Link>
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-2">
          <input
            className="border-b outline-none px-2 py-1.5 bg-transparent"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            required
          />
          <div className="flex justify-end">
            <button className="text-gray-300 hover:bg-green-700 font-medium text-xs px-3.5 py-2.5 rounded bg-gray-700 w-full">
              Sent Request
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
