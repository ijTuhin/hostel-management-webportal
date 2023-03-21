import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "tw-elements";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import SignupPage from "./Authentications/SignupForms/SignupPage";
import PageContainer from "./Pages/PageContainer";
import Authenticate from "./Authentications/Authenticate/Authenticate";
import UserContext from "./Authentications/Authenticate/UserContext";
import OrderSummaryPage from "./Pages/OrderSummaryPage";
import PaymentHistoryPage from "./Pages/PaymentHistoryPage";
import AdminLoginPage from "./Pages/AdminLoginPage";
import ManagerLoginPage from "./Pages/ManagerLoginPage";
import UserLoginPage from "./Pages/UserLoginPage";
import LoginPage from "./Pages/LoginPage";

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
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
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
