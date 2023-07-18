import ErrorPage from "../../Pages/ErrorPage";
import SeatRent from "../Components/Finance/payment/SeatRent";
import AddGrocery from "../Components/Meal/grocery/AddGrocery";
import Groceries from "../Components/Meal/grocery/Groceries";
import EditRequests from "../Components/Warden/issue/EditRequests";
import UserIssues from "../Components/Warden/issue/UserIssues";
import AddNotice from "../Components/Warden/notice/add/AddNotice";
import ReceivedNotices from "../Components/Warden/notice/received/ReceivedNotices";
import SentNotices from "../Components/Warden/notice/sent/SentNotices";
import RoomAllocation from "../Components/Warden/room/allocation/RoomAllocation";
import RoomDetails from "../Components/Warden/room/details/RoomDetails";
import AddStaff from "../Components/Warden/staff/add/AddStaff";
import ManageStaff from "../Components/Warden/staff/manage/ManageStaff";
import AddUser from "../Components/Warden/user/add/AddUser";
import Attendance from "../Components/Warden/user/attendance/Attendance";
import ManageUser from "../Components/Warden/user/manage/ManageUser";
import GroceryPageFinance from "../Pages/Finance/GroceryPageFinance";
import PaymentsPageFinance from "../Pages/Finance/PaymentsPageFinance";
import SalaryPage from "../Pages/Finance/SalaryPage";
import UtilityPageFinance from "../Pages/Finance/UtilityPageFinance";
import GroceryPageMeal from "../Pages/Meal/GroceryPageMeal";
import OrdersPage from "../Components/Common/mealOrders/OrdersPage";
import IssuesPage from "../Pages/Warden/IssuesPage";
import NoticePage from "../Pages/Warden/NoticePage";
import RoomPage from "../Pages/Warden/RoomPage";
import StaffPage from "../Pages/Warden/StaffPage";
import UserPage from "../Pages/Warden/UserPage";
import UtilityPageWarden from "../Pages/Warden/UtilityPageWarden";
import { month, token } from "./conditionData";
import MealOrdersPage from "../Pages/Meal/MealOrdersPage";
import MealPaymentPage from "../Pages/Meal/MealPaymentPage";
import MealPayment from "../Components/Common/mealPayment/mealPayment";

const wardenChild = [
  {
    index: true,
    path: "/",
    element: <UtilityPageWarden />,
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/utility?month=${month}`, {
        headers: { Authorization: `Beared ${token}` },
      });
    },
  }, // Done
  {
    path: "/user",
    element: <UserPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AddUser />, errorElement: <ErrorPage /> },
      {
        path: "manage",
        element: <ManageUser />,
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(`http://localhost:3001/user`, {
            headers: { Authorization: `Beared ${token}` },
          });
        },
      }, // search, sort & update data
      {
        path: "orders",
        element: <OrdersPage />,
        errorElement: <ErrorPage />,
        // loader: () => {
        //   return fetch(`http://localhost:3001/user`, {
        //     headers: { Authorization: `Beared ${token}` },
        //   });
        // },
      }, // check the meal time condition
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
    ],
  },
  {
    path: "/room",
    element: <RoomPage />,
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
        element: <RoomAllocation />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/issue",
    element: <IssuesPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <UserIssues />,
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(`http://localhost:3001/user`, {
            headers: { Authorization: `Beared ${token}` },
          });
        },
      },
      {
        path: "edit-request",
        element: <EditRequests />,
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
    path: "/notice",
    element: <NoticePage />,
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
      }, // change some design
      { path: "upload", element: <AddNotice />, errorElement: <ErrorPage /> },
      {
        path: "sent",
        element: <SentNotices />,
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(`http://localhost:3001/notice`, {
            headers: { Authorization: `Beared ${token}` },
          });
        },
      }, // change some design
    ],
  },
  {
    path: "/staff",
    element: <StaffPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AddStaff />, errorElement: <ErrorPage /> },
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
];
const financeChild = [
  {
    index: true,
    path: "/",
    element: <UtilityPageFinance />,
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/utility?month=${month}`, {
        headers: { Authorization: `Beared ${token}` },
      });
    },
  },
  {
    path: "/grocery",
    element: <GroceryPageFinance />,
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/user`, {
        headers: { Authorization: `Beared ${token}` },
      });
    },
  },
  {
    path: "/payment",
    element: <PaymentsPageFinance />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SeatRent />,
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(`http://localhost:3001/user`, {
            headers: { Authorization: `Beared ${token}` },
          });
        },
      },
      {
        path: "meal-bill",
        element: <MealPayment />,
        errorElement: <ErrorPage />,
        loader: () => {
          return fetch(`http://localhost:3001/payment?month=${month}&item=meal`, {
            headers: { Authorization: `Beared ${token}` },
          });
        },
      },
    ],
  },
  {
    path: "/salary",
    element: <SalaryPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/staff`, {
        headers: { Authorization: `Beared ${token}` },
      });
    },
  },
];
const mealChild = [
  {
    index: true,
    path: "/",
    element: <MealOrdersPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/user`, {
        headers: { Authorization: `Beared ${token}` },
      });
    },
  },
  {
    path: "/grocery",
    element: <GroceryPageMeal />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AddGrocery />, errorElement: <ErrorPage /> },
      {
        path: "lists",
        element: <Groceries />,
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
    path: "/payment",
    element: <MealPaymentPage />,
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/payment?month=${month}&item=meal`, {
        headers: { Authorization: `Beared ${token}` },
      });
    },
  },
];

export { wardenChild, financeChild, mealChild };
