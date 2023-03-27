import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import PageContainer from "./Pages/PageContainer";
import Authenticate from "./Authentications/Authenticate/Authenticate";
import UserContext from "./Authentications/Authenticate/UserContext";
import LoginPage from "./Pages/LoginPage";
import MealDrawer from "./Utilities/Drawer/MealDrawer";
import OrderSummary from "./Components/OrderSummary/OrderSummary";
import WardenDrawer from "./Utilities/Drawer/WardenDrawer";
import FinanceDrawer from "./Utilities/Drawer/FinanceDrawer";
import UserPage from "./Pages/UserPage";
import UserDetails from "./Components/Users/UserDetails/UserDetails";
import ManageAccount from "./Components/Users/ManageAccount/ManageAccount";
import Feedback from "./Components/Users/Feedback/Feedback";
import CreateUser from "./Components/Users/CreateNewUser/CreateUser";

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

      {
        path: "/meal",
        element: (
          <Authenticate>
            <MealDrawer />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/meal",
            element: (
              <Authenticate>
                <OrderSummary />
              </Authenticate>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
        ],
      },

      {
        path: "/warden",
        element: (
          <Authenticate>
            <WardenDrawer />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/warden",
            element: (
              <Authenticate>
                <OrderSummary />
              </Authenticate>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
        ],
      },

      {
        path: "/finance-management",
        element: (
          <Authenticate>
            <FinanceDrawer />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/finance-management",
            element: (
              <Authenticate>
                <OrderSummary />
              </Authenticate>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
        ],
      },

      {
        path: "/users",
        element: (
          <Authenticate>
            <UserPage />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/users/detail",
            element: <UserDetails />,
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/users/manage-account",
            element: <ManageAccount />,
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/users/create-account",
            element: <CreateUser />,
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/users/manage-user",
            element: <ManageAccount />,
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/users/anonymous-feedback",
            element: <Feedback />,
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/users/non-residents",
            element: <ManageAccount />,
            errorElement: <ErrorPage />,
            children: [],
          },
        ],
      },

      {
        path: "/create-notice",
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
