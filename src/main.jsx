import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserContext from "./Authentications/Authenticate/UserContext";
import QRcode from "./NEW/Components/Common/QRcode/QRcode";
import HomePage from "./NEW/Pages/HomePage";
import {
  financeChild,
  mealChild,
  wardenChild,
} from "./NEW/Hooks/RouteChildren";
import { role, token } from "./NEW/Hooks/conditionData";
import LoginPage from "./NEW/Pages/LoginPage";
import AdminLogin from "./NEW/Components/Login/AdminLogin";
import Authenticate from "./Authentications/Authenticate/Authenticate";
import ErrorPage from "./NEW/Components/Login/ErrorPage";
import UtilityPageWarden from "./NEW/Pages/Warden/UtilityPageWarden";
import UtilityPageFinance from "./NEW/Pages/Finance/UtilityPageFinance";
import MealOrdersPage from "./NEW/Pages/Meal/MealOrdersPage";
import UserPage from "./NEW/Pages/Warden/UserPage";
import ManageUser from "./NEW/Components/Warden/user/manage/ManageUser";
import Attendance from "./NEW/Components/Warden/user/attendance/Attendance";
import AddUserPage from "./NEW/Components/Warden/user/add/AddUserPage";
import AddUser from "./NEW/Components/Warden/user/add/AddUser";
import CreateAccount from "./NEW/Components/Warden/user/add/CreateAccount";
import OrdersPage from "./NEW/Components/Common/mealOrders/OrdersPage";
import RoomPage from "./NEW/Pages/Warden/RoomPage";
import RoomDetails from "./NEW/Components/Warden/room/details/RoomDetails";
import RoomAllocationPage from "./NEW/Components/Warden/room/allocation/RoomAllocationPage";
import IssuesPage from "./NEW/Pages/Warden/IssuesPage";
import UserIssues from "./NEW/Components/Common/Issues/UserIssues";
import EditRequests from "./NEW/Components/Warden/issue/EditRequests";
import NoticePage from "./NEW/Components/Common/notice/NoticePage";
import ReceivedNotices from "./NEW/Components/Common/notice/received/ReceivedNotices";
import AddNoticePage from "./NEW/Components/Common/notice/add/AddNoticePage";
import SentNotices from "./NEW/Components/Common/notice/sent/SentNotices";
import StaffPage from "./NEW/Pages/Warden/StaffPage";
import AddStaffPage from "./NEW/Components/Warden/staff/add/AddStaffPage";
import ManageStaff from "./NEW/Components/Warden/staff/manage/ManageStaff";
import SalaryPage from "./NEW/Pages/Finance/SalaryPage";
import MealPayment from "./NEW/Components/Common/mealPayment/MealPayment";
import SeatRent from "./NEW/Components/Finance/payment/SeatRent";
import PaymentsPageFinance from "./NEW/Pages/Finance/PaymentsPageFinance";
import GroceryPageFinance from "./NEW/Pages/Finance/GroceryPageFinance";
import MealPaymentPage from "./NEW/Pages/Meal/MealPaymentPage";
import Groceries from "./NEW/Components/Meal/grocery/Groceries";
import UpdateUserModal from "./NEW/Components/Warden/user/manage/UpdateUserModal";
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
let routeChild = 0;
if (role === "warden") routeChild = wardenChild;
else if (role === "accountant") routeChild = financeChild;
else if (role === "meal") routeChild = mealChild;
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticate>
        <HomePage />
      </Authenticate>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Authenticate>
            {role === "meal" ? (
              <MealOrdersPage />
            ) : role === "warden" ? (
              <UtilityPageWarden />
            ) : (
              <UtilityPageFinance />
            )}
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(`http://localhost:3001/utility?month=${month}`, {
            headers: { Authorization: `Beared ${token}` },
          });
        },
      },
      /* ==============================Meal============================== */
      {
        path: "/meal-payment",
        element: <MealPaymentPage />,
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(
            `http://localhost:3001/payment?month=${month}&item=meal`,
            {
              headers: { Authorization: `Beared ${token}` },
            }
          );
        },
      },
      /* ==============================Finance============================== */
      {
        path: "/payment",
        element: (
          <Authenticate>
            <PaymentsPageFinance />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <SeatRent />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(
                `http://localhost:3001/payment?month=${month}&item=rent`,
                {
                  headers: { Authorization: `Beared ${token}` },
                }
              );
            },
          },
          {
            path: "meal-bill",
            element: <MealPayment />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(
                `http://localhost:3001/payment?month=${month}&item=meal`,
                {
                  headers: { Authorization: `Beared ${token}` },
                }
              );
            },
          },
          {
            path: "issue",
            element: <UserIssues />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/message`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          },
        ],
      },
      {
        path: "/salary",
        element: (
          <Authenticate>
            <SalaryPage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(`http://localhost:3001/staff`, {
            headers: { Authorization: `Beared ${token}` },
          });
        },
      },
      /* ==============================Warden============================== */
      {
        path: "/user",
        element: (
          <Authenticate>
            <UserPage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <ManageUser />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/user`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          },
          {
            path: "attendance",
            element: <Attendance />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/user/attendance`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          },
          {
            path: "add",
            element: <AddUserPage />,
            errorElement: <ErrorPage />,
            children: [
              {
                index: true,
                element: <AddUser />,
                errorElement: <ErrorPage />,
              },
              {
                path: "new",
                element: <CreateAccount />,
                errorElement: <ErrorPage />,
              },
            ],
          },
          {
            path: "orders",
            element: <OrdersPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "update",
            element: <UpdateUserModal />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/user`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          },
        ],
      },
      {
        path: "/room",
        element: (
          <Authenticate>
            <RoomPage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <RoomDetails />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/seat`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          }, // Done
          {
            path: "allocation",
            element: <RoomAllocationPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/issue",
        element: (
          <Authenticate>
            <IssuesPage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <UserIssues />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/message`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          },
          {
            path: "edit-request",
            element: <EditRequests />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/admin/edit-request`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          },
        ],
      },
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
            path: "manage",
            element: <ManageStaff />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/staff`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          }, // Update form need to design with modal
        ],
      },
      /* ==============================Meal - Finance || Common============================== */
      {
        path: "/grocery",
        element:
          role === "meal" ? (
            // <GroceryPageMeal />
            <Groceries />
          ) : (
            role === "accountant" && <GroceryPageFinance />
          ),
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(`http://localhost:3001/grocery`, {
            headers: { Authorization: `Beared ${token}` },
          });
        },
      },
      /* ==============================Warden - Finance || Common============================== */
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
            element: <ReceivedNotices />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/notice/get`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
          },
          {
            path: "upload",
            element: <AddNoticePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "sent",
            element: <SentNotices />,
            errorElement: <ErrorPage />,
            loader: () => {
              return fetch(`http://localhost:3001/notice`, {
                headers: { Authorization: `Beared ${token}` },
              });
            },
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
  {
    path: "/qr-scanner",
    element: (
      <Authenticate>
        <QRcode />
      </Authenticate>
    ),
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContext>
    <RouterProvider router={router} />
  </UserContext>
);
