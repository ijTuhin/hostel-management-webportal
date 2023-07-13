import React, { useContext } from "react";
import { useAuthUser } from "../Authenticate/UserContext";
import { useNavigate } from "react-router-dom";
import { token } from "../../Utilities/Hooks/CommonHooks";
const GoogleSignIn = () => {
  const { googleSignIn, MealLoginWithDB, provider } = useAuthUser();
  const navigate = useNavigate();
  let error;
  const handleLogin = () => {
    googleSignIn(provider)
      .then((userCredential) => {
        const email = userCredential.user.email;
        MealLoginWithDB(email);
        if (token) navigate("/", { replace: true });
      })
      .catch(() => {
        error = (
          <p className="text-red-500 text-center">Please use valid account!!</p>
        );
        console.log("Not matched");
      });
  };
  return (
    <div>
      {error}
      <button onClick={handleLogin} className="shadow-lg py-3 px-10">
        GoogleSignIn
      </button>
    </div>
  );
};

export default GoogleSignIn;
