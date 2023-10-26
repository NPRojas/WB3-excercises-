const months = ["January", "February", "March", "April",
 "May", "June", "July", "August", "September",
 "October", "November", "December"];

 const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const currentDate = new Date ();
const month = months[currentDate.getMonth()];
const date = currentDate.getDate();
const year = currentDate.getFullYear();
const weekday = weekdays[currentDate.getDay()];

console.log(`${date}-${month}-${year} (${weekday})`);