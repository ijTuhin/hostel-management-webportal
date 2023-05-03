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
import UserPage from "./Pages/UserPage";
import UserDetails from "./Components/Users/UserDetails/UserDetails";
import ManageAccount from "./Components/Users/ManageAccount/ManageAccount";
import Feedback from "./Components/Users/Feedback/Feedback";
import AcademicData from "./Components/Users/CreateNewUser/AcademicData";
import PersonalData from "./Components/Users/CreateNewUser/PersonalData";
import Overview from "./Components/Users/CreateNewUser/Overview";
import Create from "./Components/Users/CreateNewUser/Create";
import PaymentHistory from "./Components/PaymentHistory/PaymentHistory";
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
            {/* <Drawers item={1} title={"Mess Management Panel"} /> */}
            <DrawerContainer item={1} title={"Mess Management Panel"}/>
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/meal/orders",
            element: (
              <MealOrdersPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/meal/payment-status",
            element: (
              <PaymentStatusPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/meal/grocery-list",
            element: (
              <GroceriesPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/meal/summary",
            element: (
              <PaymentStatusPage/>
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
            <DrawerContainer item={2} title={"Warden Panel"} />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/warden/rent-status",
            element: (
              <RentStatusPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/warden/seat-details",
            element: (
              <SeatDetailsPage/>
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
            <DrawerContainer item={3} title={"Finance Management Panel"} />
          </Authenticate>
        ),
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/finance-management/meal-bill",
            element: (
              <MealBillPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/finance-management/seat-rent",
            element: (
              <SeatRentPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/finance-management/grocery-cost",
            element: (
              <GroceryCostPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/finance-management/utility-bills",
            element: (
              <UtilityBillPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/finance-management/salaries",
            element: (
              <SalariesPage/>
            ),
            errorElement: <ErrorPage />,
            children: [],
          },
          {
            path: "/finance-management/balance-sheet",
            element: (
              <MealBillPage/>
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
