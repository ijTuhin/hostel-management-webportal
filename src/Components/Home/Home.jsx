import React, { useEffect, useState } from "react";
import MealDisplay from "./MealDisplay";
import AttendancePage from "./Attendance/AttendancePage";
import Clock from "../../Utilities/Clock/Clock";

const Home = () => {
  let i = 1;
  const role = localStorage.getItem("admin-role");
  if (role === "meal") i = null;
  const [attendance, setAttendance] = useState([]);
  const date = new Date().toLocaleDateString();
  useEffect(() => {
    // Create new grocery daily record
    fetch(`http://localhost:3001/grocery?date=${date}`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((item) => {});
    // Create new Utility month record
    fetch(`http://localhost:3001/utility`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((item) => {});
    // Get Current Attendance
    fetch(`http://localhost:3001/user/attendance`)
      .then((response) => response.json())
      .then((item) => {
        setAttendance(item);
      });
  }, []);

  return (
    <div className="py-[4.35rem] h-screen">
      {role === "meal" && (
        <div className="grid grid-cols-7 h-full">
          <div className="col-span-5 flex justify-center items-center">
            <Clock />
          </div>
          <MealDisplay />
        </div>
      )}
      {role === "warden" && (
        <div className="grid grid-cols-7 h-full">
          <div className="col-span-5">
            <AttendancePage date={date} data={attendance} />
          </div>
          <MealDisplay />
        </div>
      )}
      {role === "accountant" && (
        <div className="grid grid-cols-7 h-full">
          <div className="col-span-5">
            <AttendancePage date={date} data={attendance} />
          </div>
          <MealDisplay />
        </div>
      )}
    </div>
  );
};

export default Home;
