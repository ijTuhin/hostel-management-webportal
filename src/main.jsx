import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import UserLogin from "./Authentications/UserPanel/UserLogin";
import ErrorPage from "./Pages/ErrorPage";
import SignupPage from "./Authentications/SignupForms/SignupPage";
import LoginPage from "./Authentications/LoginForm/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-signup",
    element: <SignupPage/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user-login",
    element: <LoginPage/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
