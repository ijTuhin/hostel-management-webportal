const token = localStorage.getItem("admin-access");
const role = localStorage.getItem("admin-role");
const loggedInAt = localStorage.getItem("login-time");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const month = months[new Date().getMonth()] + "-" + new Date().getFullYear();

export {token, month, loggedInAt, role};