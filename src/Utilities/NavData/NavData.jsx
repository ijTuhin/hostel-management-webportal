const UsersNavMenuData = [
    {
      title: "Create new",
      route: "/users/create",
      style: "bg-teal-700 hover:bg-teal-800",
      activeStyle: "bg-white text-teal-800 border-teal-600"
    },
    {
      title: "User Details",
      route: "/users/detail",
      style: "bg-teal-600 hover:bg-teal-800",
      activeStyle: "bg-white text-teal-800 border-teal-600"
    },
    {
      title: "Manage User",
      route: "/users/manage-user",
      style: "bg-teal-700 hover:bg-teal-800",
      activeStyle: "bg-white text-teal-800 border-teal-600"
    },
    {
      title: "Feedback",
      route: "/users/anonymous-feedback",
      style: "bg-teal-600 hover:bg-teal-800",
      activeStyle: "bg-white text-teal-800 border-teal-600"
    },
  ]
const StaffNavMenuData = [
    {
      title: "Manage Staff",
      route: "/staff/manage",
      style: "bg-emerald-600 hover:bg-emerald-800",
      activeStyle: "bg-white text-emerald-800 border-emerald-600"
    },
    {
      title: "Add new",
      route: "/staff/add",
      style: "bg-emerald-700 hover:bg-emerald-800",
      activeStyle: "bg-white text-emerald-800 border-emerald-600"
    },
    {
      title: "Salaries",
      route: "/staff/salaries",
      style: "bg-emerald-700 hover:bg-emerald-800",
      activeStyle: "bg-white text-emerald-800 border-emerald-600"
    }
  ]

export {StaffNavMenuData, UsersNavMenuData};