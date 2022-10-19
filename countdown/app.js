const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway=document.querySelector(".giveaway");
const deadline=document.querySelector(".deadline");
const items=document.querySelectorAll(".deadline-format h4");
// console.log(items)
let futureDate=new Date(2022,11,11,12,00,00);
// console.log(futureDate)
const year=futureDate.getFullYear();
const hours=futureDate.getHours();
const minutes=futureDate.getMinutes();
let month=futureDate.getMonth();
month=months[month];
const date=futureDate.getDate();
// console.log(date)دا بيجيب النهاردة يوم كام
let weekday=futureDate.getDay();
weekday=weekdays[weekday];
// console.log(weekday)دا بيجيب ترتيب اليوم من الاسبوع بداية الاحد 0
giveaway.textContent=`giveaway ends on ${weekday},${date} ${month} ${year} ${hours}:${minutes}am`;

//future time in ms
const futureTime=futureDate.getTime();
function getRemaningTime(){
const today=new Date().getTime();
const t=futureTime - today;
// console.log(t)
// 1s=1000ms
// 1m=60s
// 1hr=60min
// 1d=24hr

// valus in ms
const oneDay=24*60*60*1000;
const oneHour=60*60*1000;
const oneMinute=60*1000;
let days=t/oneDay;
days=Math.floor(days);
let hours=Math.floor((t%oneDay)/oneHour);
let minutes=Math.floor((t%oneHour)/oneMinute);
let seconds=Math.floor((t%oneMinute)/1000);

// set values
const values=[days,hours,minutes,seconds];
function format(item){
  if(item<10){
    return(item =`0${item}`);
  }
  return item;
}
items.forEach(function(item , index){
  item.innerHTML=format(values[index]);
});
if(t<0){
  clearInterval(countdown);
  deadline.innerHTML=`<h4 class="expired" >sorry,this giveaway has expired</h4>`

}
}

//count down
let countdown=setInterval(getRemaningTime,1000)
getRemaningTime()