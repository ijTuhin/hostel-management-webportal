import React from "react";
import LoginForm from "../LoginForm";

const UserLogin = () => {
  return (
    <div className="space-y-8">
      <p className="title text-green-600 text-3xl font-mono">
        <span className="text-4xl">W</span>elcome back !!!
      </p>
      <LoginForm />
    </div>
  );
};

export default UserLogin;
