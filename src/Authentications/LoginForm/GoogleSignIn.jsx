import React, { useContext } from "react";
import { AuthContext } from "../Authenticate/UserContext";
import { useNavigate } from "react-router-dom";
const GoogleSignIn = () => {
  const { googleSignIn, provider } = useContext(AuthContext);
  const navigate = useNavigate();
  let error;
  const handleLogin = () => {
    googleSignIn(provider)
      .then((userCredential) => {
        const email = userCredential.user.email;
        /* ************************************ */
        fetch("http://localhost:3001/admin/meal/login", {
          method: "POST", // or 'PUT'
          headers: {
            Authorization: "Bearer my-token",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email
          }),
        })
          .then((response) => response.json())
          .then((value) => {
            localStorage.setItem("admin-access", value.token);
            if (value.token) {
              navigate("/", { replace: true });
            } else {
                error = <p className="text-red-500 text-center">Please use valid account!!</p>;
                console.log('Not matched')
            }
          });
        /* ************************************ */
      })
      .catch(() => {
        console.log("error");
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
