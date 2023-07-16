const token = localStorage.getItem("admin-access");
const role = localStorage.getItem("admin-role");
const loggedInAt = localStorage.getItem("login-time");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const month = months[new Date().getMonth()] + "-" + new Date().getFullYear();

/* ================== Meal Conditions ================== */
const time = parseInt(new Date().toTimeString().split(":")[0]);
let meal;
if (time > 9 && time < 13) {
  meal = "L";
} else if (time > 14 && time < 23) {
  meal = "D";
} else if (time > 22 || time <= 9) {
  meal = "B";
}

export {token, month, loggedInAt, role, meal};