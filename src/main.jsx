import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./Authentications/Authenticate/UserContext";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import PageContainer from "./Pages/PageContainer";
import Authenticate from "./Authentications/Authenticate/Authenticate";
import LoginPage from "./Pages/LoginPage";
import UserDetails from "./Components/Users/UserDetails/UserDetails";
import ManageUser from "./Components/Users/ManageUser/ManageUser";
import Feedback from "./Components/Users/Feedback/Feedback";
import AcademicData from "./Components/Users/CreateNewUser/AcademicData";
import PersonalData from "./Components/Users/CreateNewUser/PersonalData";
import Overview from "./Components/Users/CreateNewUser/Overview";
import Create from "./Components/Users/CreateNewUser/Create";
import DrawerContainer from "./Utilities/Drawer/DrawerContainer";
import MealOrdersPage from "./Components/Meal/MealOrders/MealOrdersPage";
import PaymentStatusPage from "./Components/Meal/PaymentStatus/PaymentStatusPage PaymentStatusPage";
import GroceriesPage from "./Components/Meal/Groceries/GroceriesPage";
import MealBillPage from "./Components/Finance/MealBill/MealBillPage";
import SeatRentPage from "./Components/Finance/SeatRent/SeatRentPage";
import SalariesPage from "./Components/Finance/Salaries/SalariesPage";
import UtilityBillPage from "./Components/Finance/UtilityBill/UtilityBillPage";
import GroceryCostPage from "./Components/Finance/GroceryCost/GroceryCostPage";
import RentStatusPage from "./Components/Warden/RentStatus/RentStatusPage";
import SeatDetailsPage from "./Components/Warden/SeatDetails/SeatDetailsPage";
import WardenUtilityBillPage from "./Components/Warden/UtilityBill/WardenUtilityBillPage";
import RoomAllocationPage from "./Components/Warden/RoomAllocation/RoomAllocationPage";
import AttendancePage from "./Components/Warden/Attendance/AttendancePage";
import UsersPage from "./Components/Users/UsersPage";
import BalanceSheetPage from "./Components/Finance/BalanceSheet/BalanceSheetPage";
import FullDetails from "./Components/Users/User/FullDetails";
import StaffPage from "./Components/Staff/StaffPage";
import AddStaffPage from "./Components/Staff/AddStaff/AddStaffPage";
import SalaryDetailPage from "./Components/Staff/Salary/SalaryDetailPage";
import ManageStaffPage from "./Components/Staff/ManageStaff/ManageStaffPage";
import NoticePage from "./Components/Notice/NoticePage";
import AddNoticePage from "./Components/Notice/AddNotice/AddNoticePage";
import MyAllNoticePage from "./Components/Notice/MyAllNotice/MyAllNoticePage";
import token from "./Utilities/Hooks/CommonHooks";
import PostedNoticePage from "./Components/Notice/PostedNotice/PostedNoticePage";
import UtilityRecordPage from "./Components/Common/Records/Page/UtilityRecordPage";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = months[new Date().getMonth()] + "-" + new Date().getFullYear();
const date = new Date().toLocaleDateString();

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Authenticate>
            <HomePage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [],
      },
      /* ========Meal======= */
      {
        path: "/meal",
        element: (
          <Authenticate>
            <DrawerContainer item={1} title={"Mess Management Panel"} />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <MealOrdersPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "payment-status",
            element: <PaymentStatusPage />,
            errorElement: <ErrorPage />,
            loader: () =>
              fetch(`https://hms-server-side.onrender.com/user/meal`),
            children: [],
          },
          {
            path: "grocery-list",
            element: <GroceriesPage />,
            errorElement: <ErrorPage />,
            loader: () =>
              fetch(
                `https://hms-server-side.onrender.com/grocery?date=${date}`
              ),
            children: [],
          },
        ],
      },
      /* ========Warden======= */
      {
        path: "/warden",
        element: (
          <Authenticate>
            <DrawerContainer item={2} title={"Warden Panel"} />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <RoomAllocationPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "rent-status",
            element: <RentStatusPage />,
            errorElement: <ErrorPage />,
            loader: () =>
              fetch(
                `https://hms-server-side.onrender.com/payment?month=${month}&item=rent`
              ),
            children: [],
          },
          {
            path: "seat-details",
            element: <SeatDetailsPage />,
            loader: () => fetch(`https://hms-server-side.onrender.com/seat`),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "utility-bills",
            element: <WardenUtilityBillPage />,
            loader: () =>
              fetch(
                `https://hms-server-side.onrender.com/utility?month=${month}`
              ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "attendance",
            element: <AttendancePage />,
            loader: () =>
              fetch(`https://hms-server-side.onrender.com/user/attendance`),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "records",
            element: <UtilityRecordPage />,
          },
        ],
      },
      /* ========Finance======= */
      {
        path: "/finance-management",
        element: (
          <Authenticate>
            <DrawerContainer item={3} title={"Finance Management Panel"} />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/finance-management/meal-bill",
            element: <MealBillPage />,
            errorElement: <ErrorPage />,
            loader: () =>
              fetch(
                `https://hms-server-side.onrender.com/payment?month=${month}&item=meal`
              ),
            children: [],
          },
          {
            path: "/finance-management/seat-rent",
            element: <SeatRentPage />,
            errorElement: <ErrorPage />,
            loader: () =>
              fetch(
                `https://hms-server-side.onrender.com/payment?month=${month}&item=rent`
              ),
            children: [],
          },
          {
            path: "/finance-management/grocery-cost",
            element: <GroceryCostPage />,
            loader: () =>
              fetch(
                `https://hms-server-side.onrender.com/grocery?month=${month}`
              ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/finance-management/utility-bills",
            element: <UtilityBillPage />,
            loader: () =>
              fetch(
                `https://hms-server-side.onrender.com/utility?month=${month}`
              ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/finance-management/salaries",
            element: <SalariesPage />,
            loader: () => fetch(`https://hms-server-side.onrender.com/staff`),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            index: true,
            element: <BalanceSheetPage />,
            loader: () =>
              fetch(
                `https://hms-server-side.onrender.com/balanceSheet?month=${month}`
              ),
            errorElement: <ErrorPage />,
          },
        ],
      },
      /* ========Notice======= */
      {
        path: "/notice",
        element: (
          <Authenticate>
            <NoticePage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <AddNoticePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/notice/posted",
            element: <PostedNoticePage />,
            errorElement: <ErrorPage />,
            loader: async () => {
              return fetch(`https://hms-server-side.onrender.com/notice`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
            },
            children: [],
          },
          {
            path: "/notice/all",
            element: <MyAllNoticePage />,
            errorElement: <ErrorPage />,
            loader: async () => {
              return fetch(`https://hms-server-side.onrender.com/notice/get`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
            },
            children: [],
          },
        ],
      },
      /* ========Staff======= */
      {
        path: "/staff",
        element: (
          <Authenticate>
            <StaffPage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <AddStaffPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/staff/manage",
            element: <ManageStaffPage />,
            errorElement: <ErrorPage />,
            loader: () => fetch(`https://hms-server-side.onrender.com/staff`),
            children: [],
          },
          {
            path: "/staff/salaries",
            element: <SalaryDetailPage />,
            errorElement: <ErrorPage />,
            loader: () => fetch(`https://hms-server-side.onrender.com/staff`),
            children: [],
          },
        ],
      },
      /* ========Users======= */
      {
        path: "/users",
        element: (
          <Authenticate>
            <UsersPage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            //   path: "/users",
            index: true,
            element: <UserDetails />,
            errorElement: <ErrorPage />,
            loader: () =>
              fetch(`https://hms-server-side.onrender.com/user/data`),
          },
          {
            path: "/users/create",
            element: <DrawerContainer item={4} />,
            errorElement: <ErrorPage />,
            children: [
              {
                path: "/users/create/academic",
                element: <AcademicData />,
                errorElement: <ErrorPage />,
                children: [],
              },
              {
                path: "/users/create/personal",
                element: <PersonalData />,
                errorElement: <ErrorPage />,
                children: [],
              },
              {
                path: "/users/create/overview",
                element: <Overview />,
                errorElement: <ErrorPage />,
                children: [],
              },
              {
                path: "/users/create/account",
                element: <Create />,
                errorElement: <ErrorPage />,
                children: [],
              },
            ],
          },
          {
            path: "/users/manage-user",
            element: <ManageUser />,
            errorElement: <ErrorPage />,
            loader: () =>
              fetch(`https://hms-server-side.onrender.com/user/data`),
            children: [],
          },
          {
            path: "/users/anonymous-feedback",
            element: <Feedback />,
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/users/manage-user/update",
            element: <FullDetails />,
            errorElement: <ErrorPage />,
            children: [],
          },
        ],
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
);
