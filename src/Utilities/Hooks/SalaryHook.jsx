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
  console.log(salary);
  if (salary?.month === month) status = 1;
}

export default getCurrentMonthSalary;
