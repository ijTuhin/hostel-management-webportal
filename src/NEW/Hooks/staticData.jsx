const wardenMenu = [
  {
    name: "Utility bill",
    link: "/",
    subMenu: null,
  },
  {
    name: "Manage Users",
    link: "/user",
    subMenu: [
      {
        name: "Add new",
        link: "/user",
      },
      {
        name: "Manage User",
        link: "/user/manage",
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
    subMenu: null,
  },
  {
    name: "Grocery Cost",
    link: "/grocery",
    subMenu: null,
  },
  {
    name: "View Payments",
    link: "/payment",
    subMenu: [
      {
        name: "Seat Rent",
        link: "/payment",
      },
      {
        name: "Meal Bill",
        link: "/payment/meal-bill",
      },
    ],
  },
  {
    name: "Pay Salary",
    link: "/salary",
    subMenu: null,
  },
];
const mealMenu = [
  {
    name: "Orders",
    link: "/",
    subMenu: null,
  },
  {
    name: "Grocery",
    link: "/grocery",
    subMenu: [
      {
        name: "Add item",
        link: "/grocery",
      },
      {
        name: "Itemlist",
        link: "/grocery/list",
      },
    ],
  },
  {
    name: "Payment",
    link: "/payment",
    subMenu: null,
  },
];

export { wardenMenu, financeMenu, mealMenu };
