import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthUser } from "./UserContext";
import { loggedInAt, token } from "../../NEW/Hooks/conditionData";

const Authenticate = ({ children }) => {
  const { authUser, loading } = useAuthUser();
  const location = useLocation();
  const user = localStorage.getItem("user-auth");
  const time = localStorage.getItem("login-time");
  const duration = (parseInt(Date.now()) - parseInt(time)) / 1000;
  console.log(user, duration);
  if (duration > 36000) {
    localStorage.removeItem("admin-access");
    localStorage.removeItem("admin-role");
    localStorage.removeItem("login-time");
    localStorage.removeItem("user-auth");
  } else if (user && token && duration <= 36000) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Authenticate;
