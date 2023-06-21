const token = localStorage.getItem("admin-access");
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const month = months[new Date().getMonth()] + "-" + new Date().getFullYear();

export {token, month};