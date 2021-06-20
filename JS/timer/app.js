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

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4") // Here we wrote the class name and them
                                                               // We write h4 -> spcifing that we want to take the h4
                                                              // And work with them
//let futureDate = new Date(); // this will show the now date

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();


//let futureDate = new Date(2021, 0, 28, 11, 30, 0);// Year , month, day, hour, mins, sec
                                            // Month are from 0 , not from 1, so ex May is 5th month so in js it will be 4
                                            //because the array start from 0 not from 1


const futureDate= new Date(tempYear,tempMonth,tempDay + 10,11,30,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();

month = months[month];
const date = futureDate.getDate();
const weekday =weekdays[futureDate.getDay()];
giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am`


// future time in mileseconds
const futureTime = futureDate.getTime();
//console.log(futureTime);

function getRemainingTime(){
const today = new Date().getTime();
const t = futureTime - today;
//console.log(t);

// How many miliseconds are in one day
 const oneDay = 24 *60*60*1000;
 const oneHour = 60*60*1000;
 const oneMin = 60*1000;

 // Calculate all Values

 let days = t / oneDay;
 days = Math.floor(days);
 let hours = Math.floor((t%oneDay) / oneHour);
 let minutes = Math.floor((t % oneHour) / oneMin);
 let seconds = Math.floor((t % oneMin) / 1000);
 

 //set values of the array
 const values = [days, hours, minutes,seconds];

 function format(item){
   if (item < 10){
     return item =`0${item}`
   }
   return item;
 }
 items.forEach(function(item,index){
   item.innerHTML = format(values[index]);
 });
 if(t<0){
   clearInterval(countdown);
   deadline.innerHTML = `<h4 class ="expired"<sorry, this giveaway has expired</h4>`
 }
}

// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();