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
      className="hover:bg-green-500 border rounded-md border-green-500 hover:text-white text-green-600 hover:decoration-2 px-2.5 py-1.5"
    >
      Sign Out
      {/* <RiLogoutCircleRLine /> */}
    </button>
  );
};

export default LogOut;
