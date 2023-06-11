import React, { useEffect, useState } from "react";
import MealDisplay from "./MealDisplay";
import AttendancePage from "./Attendance/AttendancePage";
import Clock from "../../Utilities/Clock/Clock";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fffbeb",
    },
  },
});
const Home = () => {
  const [attendance, setAttendance] = useState([]);
  const [page, setPage] = useState(1);
  let i = 1;
  const role = localStorage.getItem("admin-role");
  if (role === "meal") i = null;
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
    fetch(`http://localhost:3001/user/attendance?page=${page - 1}&size=${8}`)
      .then((response) => response.json())
      .then((item) => {
        setAttendance(item);
      });
  }, [8, page]);
  const pages = Math.ceil(attendance.total / 8);
  return (
    <div className="py-[4.35rem] h-screen">
      {role === "accountant" ? (
        <div className="grid grid-cols-7 h-full"></div>
      ) : (
        <div className="grid grid-cols-7 h-full">
          {role === "meal" && (
            <div className="col-span-5 flex justify-center items-center">
              <Clock />
            </div>
          )}
          {role === "warden" && (
            <div className="col-span-5 space-y-2 py-8">
              <AttendancePage date={date} data={attendance.data} />
              <div className="flex justify-center">
                <ThemeProvider theme={theme}>
                  <Pagination
                    color="primary"
                    count={pages}
                    page={page}
                    onChange={(e, i) => setPage(i)}
                  />
                </ThemeProvider>
              </div>
            </div>
          )}
          <MealDisplay />
        </div>
      )}
    </div>
  );
};

export default Home;
