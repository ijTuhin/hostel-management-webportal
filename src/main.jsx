import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./Authentications/Authenticate/UserContext";
import ErrorPage from "./Pages/ErrorPage";
// import LoginPage from "./Pages/LoginPage";
// import HomePage from "./Pages/HomePage";
// import PageContainer from "./Pages/PageContainer";
// import Authenticate from "./Authentications/Authenticate/Authenticate";
// import UserDetails from "./Components/Users/UserDetails/UserDetails";
// import ManageUser from "./Components/Users/ManageUser/ManageUser";
// import Feedback from "./Components/Users/Feedback/Feedback";
// import AcademicData from "./Components/Users/CreateNewUser/AcademicData";
// import PersonalData from "./Components/Users/CreateNewUser/PersonalData";
// import Overview from "./Components/Users/CreateNewUser/Overview";
// import Create from "./Components/Users/CreateNewUser/Create";
// import DrawerContainer from "./Utilities/Drawer/DrawerContainer";
// import MealOrdersPage from "./Components/Meal/MealOrders/MealOrdersPage";
// import PaymentStatusPage from "./Components/Meal/PaymentStatus/PaymentStatusPage PaymentStatusPage";
// import GroceriesPage from "./Components/Meal/Groceries/GroceriesPage";
// import MealBillPage from "./Components/Finance/MealBill/MealBillPage";
// import SeatRentPage from "./Components/Finance/SeatRent/SeatRentPage";
// import SalariesPage from "./Components/Finance/Salaries/SalariesPage";
// import UtilityBillPage from "./Components/Finance/UtilityBill/UtilityBillPage";
// import GroceryCostPage from "./Components/Finance/GroceryCost/GroceryCostPage";
// import RentStatusPage from "./Components/Warden/RentStatus/RentStatusPage";
// import SeatDetailsPage from "./Components/Warden/SeatDetails/SeatDetailsPage";
// import WardenUtilityBillPage from "./Components/Warden/UtilityBill/WardenUtilityBillPage";
// import RoomAllocationPage from "./Components/Warden/RoomAllocation/RoomAllocationPage";
// import AttendancePage from "./Components/Warden/Attendance/AttendancePage";
// import UsersPage from "./Components/Users/UsersPage";
// import BalanceSheetPage from "./Components/Finance/BalanceSheet/BalanceSheetPage";
// import FullDetails from "./Components/Users/User/FullDetails";
// import StaffPage from "./Components/Staff/StaffPage";
// import AddStaffPage from "./Components/Staff/AddStaff/AddStaffPage";
// import SalaryDetailPage from "./Components/Staff/Salary/SalaryDetailPage";
// import ManageStaffPage from "./Components/Staff/ManageStaff/ManageStaffPage";
// import NoticePage from "./Components/Notice/NoticePage";
// import AddNoticePage from "./Components/Notice/AddNotice/AddNoticePage";
// import MyAllNoticePage from "./Components/Notice/MyAllNotice/MyAllNoticePage";
// import PostedNoticePage from "./Components/Notice/PostedNotice/PostedNoticePage";
// import UtilityRecordPage from "./Components/Common/Records/Page/UtilityRecordPage";
import { token } from "./Utilities/Hooks/CommonHooks";
import QRcode from "./NEW/Components/Common/QRcode/QRcode";
import HomePage from "./NEW/Pages/HomePage";
import UtilityPageWarden from "./NEW/Pages/Warden/UtilityPageWarden";
import UserPage from "./NEW/Pages/Warden/UserPage";
import RoomPage from "./NEW/Pages/Warden/RoomPage";
import IssuesPage from "./NEW/Pages/Warden/IssuesPage";
import NoticePage from "./NEW/Pages/Warden/NoticePage";
import StaffPage from "./NEW/Pages/Warden/StaffPage";
import {
  financeChild,
  mealChild,
  wardenChild,
} from "./NEW/Hooks/RouteChildren";
import { role } from "./NEW/Hooks/conditionData";
import AddUser from "./NEW/Components/Warden/user/AddUser";
import ManageUser from "./NEW/Components/Warden/user/ManageUser";
import Attendance from "./NEW/Components/Warden/user/Attendance";
import RoomDetails from "./NEW/Components/Warden/room/RoomDetails";
import RoomAllocation from "./NEW/Components/Warden/room/RoomAllocation";
import UserIssues from "./NEW/Components/Warden/issue/UserIssues";
import EditRequests from "./NEW/Components/Warden/issue/EditRequests";
import ReceivedNotices from "./NEW/Components/Warden/notice/ReceivedNotices";
import AddNotice from "./NEW/Components/Warden/notice/AddNotice";
import SentNotices from "./NEW/Components/Warden/notice/SentNotices";
import AddStaff from "./NEW/Components/Warden/staff/AddStaff";
import ManageStaff from "./NEW/Components/Warden/staff/ManageStaff";
import LoginPage from "./NEW/Pages/LoginPage";
import AdminLogin from "./NEW/Components/Login/AdminLogin";
import GoogleLogin from "./NEW/Components/Login/GoogleLogin";
import '@fontsource/kalam/300.css';
import '@fontsource/kalam/400.css';
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
let routeChild;
if (role === "warden") routeChild = wardenChild;
else if (role === "accountant") routeChild = financeChild;
else if (role === "meal") routeChild = mealChild;
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: routeChild,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminLogin />, errorElement: <ErrorPage /> },
      {
        path: "non-admin",
        element: <GoogleLogin />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/qr-scanner",
    element: <QRcode />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/",
  //   element: <PageContainer />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: "/",
  //       element: (
  //         <Authenticate>
  //           <HomePage />
  //         </Authenticate>
  //       ),
  //       errorElement: <ErrorPage />,
  //       children: [],
  //     },
  //     /* ========Meal======= */
  //     {
  //       path: "/meal",
  //       element: (
  //         <Authenticate>
  //           <DrawerContainer item={1} title={"Mess Management Panel"} />
  //         </Authenticate>
  //       ),
  //       errorElement: <ErrorPage />,
  //       children: [
  //         {
  //           index: true,
  //           element: <MealOrdersPage />,
  //           errorElement: <ErrorPage />,
  //         },
  //         {
  //           path: "payment-status",
  //           element: <PaymentStatusPage />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/user/meal-status`,
  //               {
  //                 headers: { Authorization: `Beared ${token}` },
  //               }
  //             );
  //           },
  //           children: [],
  //         },
  //         {
  //           path: "grocery-list",
  //           element: <GroceriesPage />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/grocery?date=${date}`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           children: [],
  //         },
  //       ],
  //     },
  //     /* ========Warden======= */
  //     {
  //       path: "/warden",
  //       element: (
  //         <Authenticate>
  //           <DrawerContainer item={2} title={"Warden Panel"} />
  //         </Authenticate>
  //       ),
  //       errorElement: <ErrorPage />,
  //       children: [
  //         {
  //           index: true,
  //           element: <RoomAllocationPage />,
  //           errorElement: <ErrorPage />,
  //         },
  //         {
  //           path: "rent-status",
  //           element: <RentStatusPage />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/user/rent-status`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           children: [],
  //         },
  //         {
  //           path: "seat-details",
  //           element: <SeatDetailsPage />,
  //           loader: () => {
  //             return fetch(`https://hms-server-side.onrender.com/seat`, {
  //               headers: { Authorization: `Beared ${token}` },
  //             });
  //           },
  //           errorElement: <ErrorPage />,
  //           children: [],
  //         },
  //         {
  //           path: "utility-bills",
  //           element: <WardenUtilityBillPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/utility?month=${month}`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           errorElement: <ErrorPage />,
  //           children: [],
  //         },
  //         {
  //           path: "attendance",
  //           element: <AttendancePage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/user/attendance`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           errorElement: <ErrorPage />,
  //           children: [],
  //         },
  //         {
  //           path: "records",
  //           element: <UtilityRecordPage />,
  //         },
  //       ],
  //     },
  //     /* ========Finance======= */
  //     {
  //       path: "/finance-management",
  //       element: (
  //         <Authenticate>
  //           <DrawerContainer item={3} title={"Finance Management Panel"} />
  //         </Authenticate>
  //       ),
  //       errorElement: <ErrorPage />,
  //       children: [
  //         {
  //           path: "meal-bill",
  //           element: <MealBillPage />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/payment?month=${month}&item=meal`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           children: [],
  //         },
  //         {
  //           path: "seat-rent",
  //           element: <SeatRentPage />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/payment?month=${month}&item=rent`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           children: [],
  //         },
  //         {
  //           path: "grocery-cost",
  //           element: <GroceryCostPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/grocery?month=${month}`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           errorElement: <ErrorPage />,
  //           children: [],
  //         },
  //         {
  //           path: "utility-bills",
  //           element: <UtilityBillPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/utility?month=${month}`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           errorElement: <ErrorPage />,
  //           children: [],
  //         },
  //         {
  //           path: "salaries",
  //           element: <SalariesPage />,
  //           loader: () => {
  //             return fetch(`https://hms-server-side.onrender.com/staff`, {
  //               headers: { Authorization: `Beared ${token}` },
  //             });
  //           },
  //           errorElement: <ErrorPage />,
  //           children: [],
  //         },
  //         {
  //           index: true,
  //           element: <BalanceSheetPage />,
  //           loader: () => {
  //             return fetch(
  //               `https://hms-server-side.onrender.com/balanceSheet?month=${month}`,
  //               { headers: { Authorization: `Beared ${token}` } }
  //             );
  //           },
  //           errorElement: <ErrorPage />,
  //         },
  //       ],
  //     },
  //     /* ========Notice======= */
  //     {
  //       path: "/notice",
  //       element: (
  //         <Authenticate>
  //           <NoticePage />
  //         </Authenticate>
  //       ),
  //       errorElement: <ErrorPage />,
  //       children: [
  //         {
  //           index: true,
  //           element: <AddNoticePage />,
  //           errorElement: <ErrorPage />,
  //         },
  //         {
  //           path: "/notice/posted",
  //           element: <PostedNoticePage />,
  //           errorElement: <ErrorPage />,
  //           loader: async () => {
  //             return fetch(`https://hms-server-side.onrender.com/notice`, {
  //               headers: {
  //                 Authorization: `Bearer ${token}`,
  //               },
  //             });
  //           },
  //           children: [],
  //         },
  //         {
  //           path: "/notice/all",
  //           element: <MyAllNoticePage />,
  //           errorElement: <ErrorPage />,
  //           loader: async () => {
  //             return fetch(`https://hms-server-side.onrender.com/notice/get`, {
  //               headers: {
  //                 Authorization: `Bearer ${token}`,
  //               },
  //             });
  //           },
  //           children: [],
  //         },
  //       ],
  //     },
  //     /* ========Staff======= */
  //     {
  //       path: "/staff",
  //       element: (
  //         <Authenticate>
  //           <StaffPage />
  //         </Authenticate>
  //       ),
  //       errorElement: <ErrorPage />,
  //       children: [
  //         {
  //           index: true,
  //           element: <AddStaffPage />,
  //           errorElement: <ErrorPage />,
  //         },
  //         {
  //           path: "/staff/manage",
  //           element: <ManageStaffPage />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(`https://hms-server-side.onrender.com/staff`, {
  //               headers: { Authorization: `Beared ${token}` },
  //             });
  //           },
  //           children: [],
  //         },
  //         {
  //           path: "/staff/salaries",
  //           element: <SalaryDetailPage />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(`https://hms-server-side.onrender.com/staff`, {
  //               headers: { Authorization: `Beared ${token}` },
  //             });
  //           },
  //           children: [],
  //         },
  //       ],
  //     },
  //     /* ========Users======= */
  //     {
  //       path: "/users",
  //       element: (
  //         <Authenticate>
  //           <UsersPage />
  //         </Authenticate>
  //       ),
  //       errorElement: <ErrorPage />,
  //       children: [
  //         {
  //           index: true,
  //           element: <UserDetails />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(`https://hms-server-side.onrender.com/user`, {
  //               headers: { Authorization: `Beared ${token}` },
  //             });
  //           },
  //         },
  //         {
  //           path: "/users/create",
  //           element: <DrawerContainer item={4} />,
  //           errorElement: <ErrorPage />,
  //           children: [
  //             {
  //               path: "/users/create/academic",
  //               element: <AcademicData />,
  //               errorElement: <ErrorPage />,
  //               children: [],
  //             },
  //             {
  //               path: "/users/create/personal",
  //               element: <PersonalData />,
  //               errorElement: <ErrorPage />,
  //               children: [],
  //             },
  //             {
  //               path: "/users/create/overview",
  //               element: <Overview />,
  //               errorElement: <ErrorPage />,
  //               children: [],
  //             },
  //             {
  //               path: "/users/create/account",
  //               element: <Create />,
  //               errorElement: <ErrorPage />,
  //               children: [],
  //             },
  //           ],
  //         },
  //         {
  //           path: "/users/manage-user",
  //           element: <ManageUser />,
  //           errorElement: <ErrorPage />,
  //           loader: () => {
  //             return fetch(`https://hms-server-side.onrender.com/user`, {
  //               headers: { Authorization: `Beared ${token}` },
  //             });
  //           },
  //           children: [],
  //         },
  //         {
  //           path: "/users/anonymous-feedback",
  //           element: <Feedback />,
  //           errorElement: <ErrorPage />,
  //           children: [],
  //         },
  //         {
  //           path: "/users/manage-user/update",
  //           element: <FullDetails />,
  //           errorElement: <ErrorPage />,
  //           children: [],
  //         },
  //       ],
  //     },
  //   ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
);
