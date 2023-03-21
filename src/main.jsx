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
            path: "/meal/orders",
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
