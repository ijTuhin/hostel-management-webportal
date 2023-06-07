import React from "react";
import LoginForm from "../LoginForm";
import GoogleSignIn from "../GoogleSignIn";

const Login = () => {
  return (
    <div className="space-y-8">
      <p className="title text-green-600 text-3xl font-mono">
        <span className="text-4xl">W</span>elcome back !!!
      </p>
      <LoginForm />
      <GoogleSignIn/>
    </div>
  );
};

export default Login;