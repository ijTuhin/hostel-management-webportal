import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthUser } from "./UserContext";

const Authenticate = ({ children }) => {
  const { authUser, loading } = useAuthUser();
  const location = useLocation();

  if (authUser.user && authUser.user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Authenticate;
