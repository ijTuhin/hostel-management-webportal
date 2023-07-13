import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../../firebase.config";
import { loggedInAt, token } from "../../Utilities/Hooks/CommonHooks";

const AuthContext = createContext();
const auth = getAuth(app);
export const useAuthUser = () => {
  return useContext(AuthContext);
};
const UserContext = ({ children }) => {
  const [authUser, setAuthUser] = useState({
    user: null,
    data: null,
  });
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const googleSignIn = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const CreateUserWithDB = async (value) => {
    return await fetch("https://hms-server-side.onrender.com/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((item) => {
        console.log("DB Success");
      })
      .catch((e) => console.log(e, token, value));
  };

  const AdminLoginWithDB = (email, password) => {
    fetch("http://localhost:3001/admin/login", {
      method: "POST",
      headers: {
        Authorization: "Bearer admin-access",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((value) => {
        localStorage.setItem("admin-access", value.token);
        localStorage.setItem("admin-role", value.role);
        localStorage.setItem("login-time", value.time);
      });
  };

  const MealLoginWithDB = (email) => {
    fetch("http://localhost:3001/admin/meal/login", {
      method: "POST",
      headers: {
        Authorization: "Bearer admin-access",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => response.json())
      .then((value) => {
        localStorage.setItem("admin-access", value.token);
        localStorage.setItem("admin-role", value.role);
        localStorage.setItem("login-time", value.time);
        if (value.token) {
          navigate("/", { replace: true });
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("admin-access");
    localStorage.removeItem("admin-role");
    localStorage.removeItem("login-time");
    return signOut(auth);
  };

  useEffect(() => {
    const checkToken = () => {
      const duration = (Date.now() - parseInt(loggedInAt)) / 1000;
      if (duration >= 36000) {
        localStorage.removeItem("admin-access");
        // logOut();
        setAuthUser({
          ...authUser,
          user: null,
        });
      }
    };

    const createGroceryRecord = () => {
      fetch(
        `http://localhost:3001/grocery?date=${new Date().toLocaleDateString()}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Beared ${token}`,
          },
        }
      ).then((response) => response.json());
    };

    const createUtilityRecord = () => {
      fetch(`http://localhost:3001/utility`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Beared ${token}`,
        },
      }).then((response) => response.json());
    };

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthUser({
        ...authUser,
        user: currentUser,
      });
      setLoading(false);
    });

    return () => {
      unSubscribe();
      checkToken();
      createGroceryRecord();
      createUtilityRecord();
    };
  }, []);

  const authInfo = {
    authUser,
    loading,
    provider,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    CreateUserWithDB,
    MealLoginWithDB,
    AdminLoginWithDB,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;