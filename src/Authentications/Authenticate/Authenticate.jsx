import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthUser } from "./UserContext";
import { loggedInAt, token } from "../../NEW/Hooks/conditionData";

const Authenticate = ({ children }) => {
  const { authUser, loading } = useAuthUser();
  const location = useLocation();
  const duration = (Date.now() - parseInt(loggedInAt)) / 1000;
  if ((authUser.user && authUser.user.uid) || (token && duration <= 36000)) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Authenticate;
