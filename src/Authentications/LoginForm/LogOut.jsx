import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { IoIosLogOut } from "react-icons/io";
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
    <>
      <button onClick={handleLogOut} className="w-full flex justify-between items-center">
        <span>Log Out</span>
        <span className="text-base">
          <IoIosLogOut />
        </span>
      </button>
    </>
  );
};

export default LogOut;
