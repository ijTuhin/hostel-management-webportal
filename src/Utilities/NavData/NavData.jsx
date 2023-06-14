const UsersNavMenuData = [
  {
    title: "Create new",
    route: "/users/create",
    style: "bg-teal-700 hover:bg-teal-800",
    activeStyle: "bg-white text-teal-800 border-teal-600",
  },
  {
    title: "User Details",
    route: "/users",
    style: "bg-teal-600 hover:bg-teal-800",
    activeStyle: "bg-white text-teal-800 border-teal-600",
  },
  {
    title: "Manage User",
    route: "/users/manage-user",
    style: "bg-teal-700 hover:bg-teal-800",
    activeStyle: "bg-white text-teal-800 border-teal-600",
  },
  {
    title: "Feedback",
    route: "/users/anonymous-feedback",
    style: "bg-teal-600 hover:bg-teal-800",
    activeStyle: "bg-white text-teal-800 border-teal-600",
  },
];
const StaffNavMenuData = [
  {
    title: "Manage Staff",
    route: "/staff/manage",
    style: "bg-emerald-600 hover:bg-emerald-800",
    activeStyle: "bg-white text-emerald-800 border-emerald-600",
  },
  {
    title: "Add new",
    route: "/staff",
    style: "bg-emerald-700 hover:bg-emerald-800",
    activeStyle: "bg-white text-emerald-800 border-emerald-600",
  },
  {
    title: "Salaries",
    route: "/staff/salaries",
    style: "bg-emerald-700 hover:bg-emerald-800",
    activeStyle: "bg-white text-emerald-800 border-emerald-600",
  },
];

const NoticeNavMenuData = [
  {
    title: "All Notices",
    route: "/notice/all",
    style: "bg-teal-700 hover:bg-teal-800 w-1/3 rounded-l-full",
    activeStyle: "bg-teal-800 w-1/3 border-0 mx-0 rounded-l-full",
  },
  {
    title: "Add new",
    route: "/notice",
    style: "bg-teal-700 hover:bg-teal-800 w-1/3",
    activeStyle: "bg-teal-800 w-1/3 border-0 mx-0",
  },
  {
    title: "All Posted",
    route: "/notice/posted",
    style: "bg-teal-700 hover:bg-teal-800 w-1/3 rounded-r-full",
    activeStyle: "bg-teal-800 w-1/3 border-0 mx-0 rounded-r-full",
  },
];

export { StaffNavMenuData, UsersNavMenuData, NoticeNavMenuData };
