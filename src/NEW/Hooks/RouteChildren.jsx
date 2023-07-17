import ErrorPage from "../../Pages/ErrorPage";
import MealBill from "../Components/Finance/payment/MealBill";
import SeatRent from "../Components/Finance/payment/SeatRent";
import AddGrocery from "../Components/Meal/grocery/AddGrocery";
import Groceries from "../Components/Meal/grocery/Groceries";
import EditRequests from "../Components/Warden/issue/EditRequests";
import UserIssues from "../Components/Warden/issue/UserIssues";
import AddNotice from "../Components/Warden/notice/AddNotice";
import ReceivedNotices from "../Components/Warden/notice/ReceivedNotices";
import SentNotices from "../Components/Warden/notice/SentNotices";
import RoomAllocation from "../Components/Warden/room/RoomAllocation";
import RoomDetails from "../Components/Warden/room/RoomDetails";
import AddStaff from "../Components/Warden/staff/AddStaff";
import ManageStaff from "../Components/Warden/staff/ManageStaff";
import AddUser from "../Components/Warden/user/AddUser";
import Attendance from "../Components/Warden/user/Attendance";
import ManageUser from "../Components/Warden/user/ManageUser";
import MealOrder from "../Components/Warden/user/MealOrder";
import GroceryPageFinance from "../Pages/Finance/GroceryPageFinance";
import PaymentsPageFinance from "../Pages/Finance/PaymentsPageFinance";
import SalaryPage from "../Pages/Finance/SalaryPage";
import UtilityPageFinance from "../Pages/Finance/UtilityPageFinance";
import GroceryPageMeal from "../Pages/Meal/GroceryPageMeal";
import OrdersPage from "../Pages/Meal/OrdersPage";
import PaymentsPageMeal from "../Pages/Meal/PaymentsPageMeal";
import IssuesPage from "../Pages/Warden/IssuesPage";
import NoticePage from "../Pages/Warden/NoticePage";
import RoomPage from "../Pages/Warden/RoomPage";
import StaffPage from "../Pages/Warden/StaffPage";
import UserPage from "../Pages/Warden/UserPage";
import UtilityPageWarden from "../Pages/Warden/UtilityPageWarden";

const wardenChild = [
  {
    index: true,
    path: "/",
    element: <UtilityPageWarden />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user",
    element: <UserPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AddUser />, errorElement: <ErrorPage /> },
      { path: "manage", element: <ManageUser />, errorElement: <ErrorPage /> },
      { path: "orders", element: <MealOrder />, errorElement: <ErrorPage /> },
      { path: "attendance", element: <Attendance />, errorElement: <ErrorPage /> },
    ],
  },
  {
    path: "/room",
    element: <RoomPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RoomDetails />, errorElement: <ErrorPage /> },
      { path: "allocation", element: <RoomAllocation />, errorElement: <ErrorPage /> },
    ],
  },
  {
    path: "/issue",
    element: <IssuesPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <UserIssues />, errorElement: <ErrorPage /> },
      { path: "edit-request", element: <EditRequests />, errorElement: <ErrorPage /> },
    ],
  },
  {
    path: "/notice",
    element: <NoticePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ReceivedNotices />, errorElement: <ErrorPage /> },
      { path: "upload", element: <AddNotice />, errorElement: <ErrorPage /> },
      { path: "sent", element: <SentNotices />, errorElement: <ErrorPage /> },
    ],
  },
  {
    path: "/staff",
    element: <StaffPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AddStaff />, errorElement: <ErrorPage /> },
      { path: "manage", element: <ManageStaff />, errorElement: <ErrorPage /> },
    ],
  },
];
const financeChild = [
  {
    index: true,
    path: "/",
    element: <UtilityPageFinance />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/grocery",
    element: <GroceryPageFinance />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/payment",
    element: <PaymentsPageFinance />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SeatRent />, errorElement: <ErrorPage /> },
      { path: "meal-bill", element: <MealBill />, errorElement: <ErrorPage /> },
    ],
  },
  {
    path: "/salary",
    element: <SalaryPage />,
    errorElement: <ErrorPage />,
  },
];
const mealChild = [
  {
    index: true,
    path: "/",
    element: <OrdersPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/grocery",
    element: <GroceryPageMeal />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AddGrocery />, errorElement: <ErrorPage /> },
      { path: "lists", element: <Groceries />, errorElement: <ErrorPage /> },
    ],
  },
  {
    path: "/payment",
    element: <PaymentsPageMeal />,
    errorElement: <ErrorPage />,
  },
];

export { wardenChild, financeChild, mealChild };
