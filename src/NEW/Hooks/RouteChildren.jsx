import SeatRent from "../Components/Finance/payment/SeatRent";
import EditRequests from "../Components/Warden/issue/EditRequests";
import RoomAllocationPage from "../Components/Warden/room/allocation/RoomAllocationPage";
import RoomDetails from "../Components/Warden/room/details/RoomDetails";
import AddStaffPage from "../Components/Warden/staff/add/AddStaffPage";
import ManageStaff from "../Components/Warden/staff/manage/ManageStaff";
import AddUser from "../Components/Warden/user/add/AddUser";
import Attendance from "../Components/Warden/user/attendance/Attendance";
import ManageUser from "../Components/Warden/user/manage/ManageUser";
import GroceryPageFinance from "../Pages/Finance/GroceryPageFinance";
import PaymentsPageFinance from "../Pages/Finance/PaymentsPageFinance";
import SalaryPage from "../Pages/Finance/SalaryPage";
import GroceryPageMeal from "../Pages/Meal/GroceryPageMeal";
import OrdersPage from "../Components/Common/mealOrders/OrdersPage";
import IssuesPage from "../Pages/Warden/IssuesPage";
import RoomPage from "../Pages/Warden/RoomPage";
import StaffPage from "../Pages/Warden/StaffPage";
import UserPage from "../Pages/Warden/UserPage";
import { month, token } from "./conditionData";
import MealPaymentPage from "../Pages/Meal/MealPaymentPage";
import MealPayment from "../Components/Common/mealPayment/MealPayment";
import NoticePage from "../Components/Common/notice/NoticePage";
import ReceivedNotices from "../Components/Common/notice/received/ReceivedNotices";
import SentNotices from "../Components/Common/notice/sent/SentNotices";
import UserIssues from "../Components/Common/Issues/UserIssues";
import Authenticate from "../../Authentications/Authenticate/Authenticate";
import ErrorPage from "../Components/Login/ErrorPage";
import AddNoticePage from "../Components/Common/notice/add/AddNoticePage";
import CreateAccount from "../Components/Warden/user/add/CreateAccount";
import AddUserPage from "../Components/Warden/user/add/AddUserPage";
const date = new Date().toLocaleDateString();

const wardenChild = [
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
      }, // search, sort & update data
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
        // loader: () => {
        //   return fetch(`http://localhost:3001/user`, {
        //     headers: { Authorization: `Beared ${token}` },
        //   });
        // },
      }, // check the meal time condition
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
      }, // change some design
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
      }, // change some design
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
      { index: true, element: <AddStaffPage />, errorElement: <ErrorPage /> },
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
    path: "/grocery",
    element: (
      <Authenticate>
        <GroceryPageFinance />
      </Authenticate>
    ),
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/grocery?date=${date}`, {
        headers: { Authorization: `Beared ${token}` },
      });
    },
  },
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
          return fetch(`http://localhost:3001/user`, {
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
      }, // change some design
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
      }, // change some design
    ],
  },
];
const mealChild = [
  {
    path: "/grocery",
    element: <GroceryPageMeal />,
    errorElement: <ErrorPage />,
    loader: () => {
      return fetch(`http://localhost:3001/grocery?date=${date}`, {
        headers: { Authorization: `Beared ${token}` },
      });
    },
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
