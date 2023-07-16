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
import {
  loggedInAt,
  meal,
  role,
  token,
} from "../../Utilities/Hooks/CommonHooks";

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
        Authorization: `Bearer ${token}`,
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
        Authorization: `Bearer ${token}`,
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

  const qrCodeValueGenerator = () => {
    /* =================== QR code generate ==================== */
    let item;
    if (role === "warden") item = "A";
    else if (role === "meal") item = meal;
    const time = new Date().toTimeString();
    const random = Math.random().toString(36).substring(2, 7);
    const qrCode =
      time.split(":")[0] +
      "#txr!" +
      parseInt(time.split(":")[2]) +
      "#txr!" +
      time.split(":")[1] +
      "#txr!" +
      random +
      ".@" +
      "!.#" +
      item +
      "@.";
    /* =================== How to decode qrCode ==================== */
    // const a = parseInt(qrCode.split("#txr!")[0]) // ----- Hour
    // const b = parseInt(qrCode.split("#txr!")[2]) // ----- Minute
    // const c = parseInt(qrCode.split("#txr!")[1]) // ----- Second
    // const x = qrCode.substring(qrCode.length-3, qrCode.length-2) // ----- Type of Scan (A), (B,L,D)

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
    const checkToken = () => {
      const duration = (Date.now() - parseInt(loggedInAt)) / 1000;
      if (duration >= 36000) {
        localStorage.removeItem("admin-access");
        localStorage.removeItem("admin-role");
        localStorage.removeItem("login-time");
        // logOut();
        setAuthUser({
          ...authUser,
          user: null,
        });
      } else console.log("checkToken running");
    };

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setAuthUser({
        ...authUser,
        user: currentUser,
      });
      setLoading(false);
    });

    return () => {
      checkToken();
      unSubscribe();
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
    createGroceryRecord,
    createUtilityRecord,
    qrCodeValueGenerator
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
