const time = parseInt(new Date().toTimeString().split(":")[0]);
let meal;
if (time > 9 && time < 13) {
  meal = "Lunch";
} else if (time > 14 && time < 23) {
  meal = "Dinner";
} else if (time > 22 || time <= 9) {
  meal = "Breakfast";
}

export default meal;