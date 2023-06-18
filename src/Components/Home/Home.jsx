import React, { useEffect, useState } from "react";
import MealDisplay from "./MealDisplay";
import AttendancePage from "./Attendance/AttendancePage";
import Clock from "../../Utilities/Clock/Clock";
import { Pagination, ThemeProvider, createTheme } from "@mui/material";
import token from "../../Utilities/Hooks/CommonHooks";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fffbeb",
    },
  },
});
const Home = () => {
  let i = 1;
  const role = localStorage.getItem("admin-role");
  if (role === "meal") i = null;
  const date = new Date().toLocaleDateString();
  const [pageItem, setPageItem] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // Create new grocery daily record
    fetch(`https://hms-server-side.onrender.com/grocery?date=${date}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
    }).then((response) => response.json());
    // Create new Utility month record
    fetch(`https://hms-server-side.onrender.com/utility`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Beared ${token}`,
      },
    }).then((response) => response.json());
    // Get Current Attendance
    fetch(
      `https://hms-server-side.onrender.com/user/attendance?page=${
        page - 1
      }&size=${8}`,
      {
        headers: { Authorization: `Beared ${token}` },
      }
    )
      .then((response) => response.json())
      .then((item) => {
        setPageItem(item);
      });
  }, [8, page]);
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
              <AttendancePage date={date} data={pageItem.data} />
              <div className="flex justify-center">
                <ThemeProvider theme={theme}>
                  <Pagination
                    color="primary"
                    count={Math.ceil(pageItem.total / 8)}
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
