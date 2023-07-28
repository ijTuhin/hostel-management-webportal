import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthUser } from "./UserContext";
import Loader from "../../NEW/Components/Common/Loader";

const Authenticate = ({ children }) => {
  const { authUser, loading } = useAuthUser();
  const location = useLocation();
  if(loading){
    return <Loader/>
  }
  if (authUser) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default Authenticate;
