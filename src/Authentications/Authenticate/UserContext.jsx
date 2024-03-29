import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { app } from "../../../firebase.config";
import {
  loggedInAt,
  role,
  token,
  QRmeal,
  meal,
} from "../../NEW/Hooks/conditionData";
import axios from "axios";

const AuthContext = createContext();
const auth = getAuth(app);
export const useAuthUser = () => {
  return useContext(AuthContext);
};
const UserContext = ({ children }) => {
  const [authUser, setAuthUser] = useState();
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const resetPasswordRequest = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const CreateUserWithDB = async (value) => {
    return await fetch("http://localhost:3001/user/signup", {
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

  const AdminLoginWithDB = async (email) => {
    console.log("Context 64", email);
    try {
      const result = await axios
        .post(`http://localhost:3001/admin/login`, { email })
        .then((res) => {
          console.log(res?.data);
          if (res?.data?.token) {
            setAuthUser({
              ...authUser,
              token: res?.data?.token,
            });
            localStorage.setItem("admin-access", res?.data?.token);
            localStorage.setItem("admin-role", res?.data?.role);
            localStorage.setItem("login-time", Date.now());
          }
        });
      return result;
    } catch (err) {
      console.log(err?.response);
    }
  };

  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("admin-access");
    localStorage.removeItem("admin-role");
    localStorage.removeItem("login-time");
    localStorage.removeItem("user-auth");
    return signOut(auth);
  };

  const qrCodeValueGenerator = () => {
    /* =================== QR code generate ==================== */
    let item;
    if (role === "warden") item = "A";
    else if (role === "meal") item = QRmeal;
    const time = {
      h: parseInt(new Date().getHours()) + 35,
      m: parseInt(new Date().getMinutes()) + 35,
      s: parseInt(new Date().getSeconds()) + 35,
    };
    const random = Math.random().toString(36).substring(2, 7);
    const qrCode =
      String.fromCharCode(time.h) +
      "#t1hO" +
      String.fromCharCode(time.s) +
      "BjK" +
      String.fromCharCode(time.m) +
      "nJP" +
      random +
      ".@" +
      "!.#" +
      item +
      "@.";
    const [counter, setCounter] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 5000);

      return () => clearInterval(interval);
    }, []);
    return qrCode;
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unSubscribe();
    };
  }, []);

  /* ==================== Functions to Perform ===================== */

  const createGroceryRecord = () => {
    const date = new Date().toLocaleDateString();
    fetch(`http://localhost:3001/grocery?date=${date}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const createUtilityRecord = () => {
    fetch(`http://localhost:3001/utility`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.json());
  };

  const authInfo = {
    authUser,
    loading,
    provider,
    createUser,
    signIn,
    resetPasswordRequest,
    logOut,
    CreateUserWithDB,
    AdminLoginWithDB,
    createGroceryRecord,
    createUtilityRecord,
    qrCodeValueGenerator,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
