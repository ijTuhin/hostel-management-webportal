const token = localStorage.getItem("admin-access");
const authHeader = { headers: { Authorization: `Beared ${token}` }}
const role = localStorage.getItem("admin-role");
const loggedInAt = localStorage.getItem("login-time");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = months[new Date().getMonth()] + "-" + new Date().getFullYear();

/* ================== Meal Conditions ================== */
const time = parseInt(new Date().toTimeString().split(":")[0]);
const date = new Date().toLocaleDateString();
let meal;
let QRmeal;
if (time > 4 && time < 12) {
  meal = "Breakfast";
  QRmeal = "B";
} else if (time > 12 && time < 17) {
  meal = "Lunch";
  QRmeal = "L";
} else if (time > 19 || time <= 23) {
  meal = "Dinner";
  QRmeal = "D";
}

/* ================== Salary ================== */
function getCurrentMonthSalary({item}) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[new Date().getMonth()] + "-" + new Date().getFullYear();
  let status = 0;
  let salary = item?.record[item?.record?.length - 1];
  // console.log(salary);
  if (salary?.month === month) status = 1;
}

export { token, month,date, loggedInAt, role, meal, QRmeal, getCurrentMonthSalary, authHeader };
