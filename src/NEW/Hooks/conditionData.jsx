const token = localStorage.getItem("admin-access");
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

export { token, month, loggedInAt, role, meal, QRmeal };
