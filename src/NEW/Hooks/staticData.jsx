import { GiMeal } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { IoMailUnreadSharp } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import {
  FaUserFriends,
  FaShoppingCart,
  FaHouseUser,
  FaBoxTissue,
} from "react-icons/fa";

const wardenMenu = [
  {
    name: "Utility bill",
    link: "/",
    icon: <FaShoppingCart />,
    subMenu: null,
  },
  {
    name: "Manage Users",
    link: "/user",
    icon: <FaUserFriends />,
    subMenu: [
      {
        name: "Add new",
        link: "/user/add",
      },
      {
        name: "Manage User",
        link: "/user",
      },
      {
        name: "Meal Orders",
        link: "/user/orders",
      },
      {
        name: "Attendance",
        link: "/user/attendance",
      },
    ],
  },
  {
    name: "Room management",
    link: "/room",
    icon: <ImHome />,
    subMenu: [
      {
        name: "Seat Details",
        link: "/room",
      },
      {
        name: "Allocation",
        link: "allocation",
      },
    ],
  },
  {
    name: "Check Issues",
    link: "/issue",
    icon: <FaBoxTissue />,
    subMenu: [
      {
        name: "User Problems",
        link: "/issue",
      },
      {
        name: "Edit Requests",
        link: "/issue/edit-request",
      },
    ],
  },
  {
    name: "Notice Section",
    link: "/notice",
    icon: <IoMailUnreadSharp />,
    subMenu: [
      {
        name: "Notices",
        link: "/notice",
      },
      {
        name: "Upload",
        link: "/notice/upload",
      },
      {
        name: "Sent",
        link: "/notice/sent",
      },
    ],
  },
  {
    name: "Manage Staff",
    link: "/staff",
    icon: <FaHouseUser />,
    subMenu: [
      {
        name: "Add Staff",
        link: "/staff",
      },
      {
        name: "Manage",
        link: "/staff/manage",
      },
    ],
  },
];
const financeMenu = [
  {
    name: "Utility Bills",
    link: "/",
    icon: <FaShoppingCart />,
    subMenu: null,
  },
  {
    name: "Grocery Cost",
    link: "/grocery",
    icon: <GiMeal />,
    subMenu: null,
  },
  {
    name: "View Payments",
    link: "/payment",
    icon: <FaUserFriends />,
    subMenu: [
      {
        name: "Seat Rent",
        link: "/payment",
      },
      {
        name: "Meal Bill",
        link: "/payment/meal-bill",
      },
      {
        name: "Check Issues",
        link: "/payment/issue",
      },
    ],
  },
  {
    name: "Pay Salary",
    link: "/salary",
    icon: <FaHouseUser />,
    subMenu: null,
  },
  {
    name: "Notice Section",
    link: "/notice",
    icon: <IoMailUnreadSharp />,
    subMenu: [
      {
        name: "Notices",
        link: "/notice",
      },
      {
        name: "Upload",
        link: "/notice/upload",
      },
      {
        name: "Sent",
        link: "/notice/sent",
      },
    ],
  },
];
const mealMenu = [
  {
    name: "Orders",
    link: "/",
    icon: <GiMeal />,
    subMenu: null,
  },
  {
    name: "Grocery",
    link: "/grocery",
    icon: <FaShoppingCart />,
  },
  {
    name: "Payment",
    link: "/payment",
    icon: <MdPayments />,
    subMenu: null,
  },
];

export { wardenMenu, financeMenu, mealMenu };
