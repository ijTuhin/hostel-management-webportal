import React from "react";
import { GiHotMeal } from "react-icons/gi";
import { useAuthUser } from "../../../Authentications/Authenticate/UserContext";
import { useNavigate } from "react-router-dom";
export default function GoogleLogin() {
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
    <div className="flex flex-col justify-center items-center gap-5 h-full py-52">
      <p className="text-green-500 text-[6rem]"><GiHotMeal/></p>
      <button
        onClick={handleLogin}
        className="px-5 py-2.5 border rounded-md text-gray-300 hover:border-green-300 hover:text-green-300 hover:shadow-lg"
      >
        Click to verify as Meal Manager
      </button>
    </div>
  );
}
