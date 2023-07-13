import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthUser } from "../Authenticate/UserContext";
import { useNavigate } from "react-router-dom";
import { token } from "../../Utilities/Hooks/CommonHooks";
const auth = getAuth();
const LogOut = () => {
  const { logOut } = useAuthUser();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut(auth)
      .then(() => {
        if (!token) navigate("/login", { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return <button onClick={handleLogOut}>Sign Out</button>;
};

export default LogOut;
