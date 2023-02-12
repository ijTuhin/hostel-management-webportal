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
      <button onClick={handleLogOut} className="pl-3 pr-5 py-2.5 hover:bg-yellow-600 pt-1 flex items-center">
        <span className="pr-3">Log Out</span>{" "}
        <span className="text-base">
          <IoIosLogOut />
        </span>
      </button>
    </>
  );
};

export default LogOut;
