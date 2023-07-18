import React from "react";
import { useAuthUser } from "../../../Authentications/Authenticate/UserContext";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
const auth = getAuth();

export default function LogOut() {
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
  return (
    <button
      onClick={handleLogOut}
      className="border border-gray-500 rounded-md hover:bg-green-600 hover:border-green-600 hover:text-gray-300 px-3 py-1.5"
    >
      Sign Out
    </button>
  );
}
