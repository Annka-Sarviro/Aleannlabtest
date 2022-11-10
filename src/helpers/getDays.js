const getDays = createdAt => {
  let currentDate = Date.parse(new Date());
  let days = (currentDate - Date.parse(createdAt)) / 86400000; //86400000 - ms в дне
  console.log(Math.round(days));
  return Math.round(days);
};

export default getDays;
