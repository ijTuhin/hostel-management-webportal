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
  role,
  token,
  QRmeal,
  meal,
} from "../../NEW/Hooks/conditionData";

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
    /* =================== How to decode qrCode ==================== */
    // const a = qrCode.charCodeAt(0) - 35 // ----- Hour
    // const b = qrCode.charCodeAt(10) - 35 // ----- Minute
    // const c = qrCode.charCodeAt(6) - 35 // ----- Second
    // const x = qrCode[24] // ----- Type of Scan (A), (B,L,D)
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

  const uploadUtilityBill = () => {
    console.log("Upload Utility Bill");
  };

  const makeMealManager = () => {
    console.log("Make Meal Manager");
  };

  const UpdateUser = () => {
    console.log("Change Account activity");
  };
  const allocateUser = () => {
    console.log("Change Account activity");
  };

  const uploadNewNotice = () => {
    console.log("Change Account activity");
  };

  const handleAccountActivity = () => {
    console.log("Change Account activity");
  };

  const approveEditRequest = () => {
    console.log("Change Account activity");
  };

  const solveIssue = () => {
    console.log("Change Account activity");
  };

  const replyToIssue = () => {
    console.log("Change Account activity");
  };

  const addNewStaff = () => {
    console.log("Change Account activity");
  };

  const updateStaffDetails = () => {
    console.log("Change Account activity");
  };

  const payStaffSalary = () => {
    console.log("Change Account activity");
  };

  const uploadGroceryList = () => {
    console.log("Change Account activity");
  };
  
  const confirmUtilityBillPay = () => {
    console.log("Change Account activity");
  }

  /* ==================== Functions to get data ===================== */
  const viewUtilityRecord = () => {
    console.log("Change Account activity");
  }
  const getUtilityCurrentMonth = () => {
    console.log("Change Account activity");
  }
  const getMealOrder = () => {
    console.log("Change Account activity");
  }
  const getAttendance = () => {
    console.log("Change Account activity");
  }
  const getRoomMemberDetail = () => {
    console.log("Change Account activity");
  }
  const getNotice = () => {
    console.log("Change Account activity");
  }
  const checkSentNotice = () => {
    console.log("Change Account activity");
  }
  const getAllIssue = () => {
    console.log("Change Account activity");
  }
  const getStaffDetails = () => {
    console.log("Change Account activity");
  }
  const getCurrentDayGroceries = () => {
    console.log("Change Account activity");
  }
  const getCurrentMonthGroceries = () => {
    console.log("Change Account activity");
  }
  const viewSalaryRecord = () => {
    console.log("Change Account activity");
  }
  const getUserPaymentStatus = () => {
    console.log("Change Account activity");
  }


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
    qrCodeValueGenerator,
    uploadUtilityBill,
    updateStaffDetails,
    uploadGroceryList,
    uploadNewNotice,
    UpdateUser,
    handleAccountActivity,
    makeMealManager,
    approveEditRequest,
    allocateUser,
    payStaffSalary,
    addNewStaff,
    replyToIssue,
    solveIssue,
    confirmUtilityBillPay,
    getAllIssue,
    getAttendance,
    getCurrentDayGroceries,
    getCurrentMonthGroceries,
    getMealOrder,
    getNotice,
    getRoomMemberDetail,
    getStaffDetails,
    getUserPaymentStatus,
    getUtilityCurrentMonth,
    checkSentNotice,
    viewSalaryRecord,
    viewUtilityRecord
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
