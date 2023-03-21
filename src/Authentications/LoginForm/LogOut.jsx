import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { AuthContext } from "../Authenticate/UserContext";
const auth = getAuth();
const LogOut = () => {
  const { logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <button
      onClick={handleLogOut}
    >
      Sign Out
    </button>
  );
};

export default LogOut;
