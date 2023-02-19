import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import SignupPage from "./Authentications/SignupForms/SignupPage";
import LoginPage from "./Authentications/LoginForm/LoginPage";
import PageContainer from "./Pages/PageContainer";
import Authenticate from "./Authentications/Authenticate/Authenticate";
import UserContext from "./Authentications/Authenticate/UserContext";
import OrderSummaryPage from "./Pages/OrderSummaryPage";
import PaymentHistoryPage from "./Pages/PaymentHistoryPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
import ManagerLoginPage from "./Pages/ManagerLoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/user/order-summary",
            element: (
              <Authenticate>
                <OrderSummaryPage />
              </Authenticate>
            ),
            errorElement: <ErrorPage />,
          },
          {
            path: "/user/payment-history",
            element: (
              <Authenticate>
                <PaymentHistoryPage />
              </Authenticate>
            ),
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/admin",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [],
      },
      {
        path: "/manager",
        element: <HomePage />,
        errorElement: <ErrorPage />,
        children: [],
      },
    ],
  },

  {
    path: "/user/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/signup",
    element: <SignupPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/manager/login",
    element: <ManagerLoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  </React.StrictMode>
);
