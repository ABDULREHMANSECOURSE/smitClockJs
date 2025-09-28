// let use24 = false; // default: 12h format

// function updateClock(){
//   const now = new Date();

//   // Time
//   let hours = now.getHours();
//   let minutes = now.getMinutes();
//   let seconds = now.getSeconds();
//   let ampm = "";

//   if(!use24){
//     ampm = hours >= 12 ? " PM" : " AM";
//     hours = hours % 12 || 12;
//   }

//   const timeStr =
//     String(hours).padStart(2,"0") + ":" +
//     String(minutes).padStart(2,"0") + ":" +
//     String(seconds).padStart(2,"0") +
//     (use24 ? "" : ampm);

//   // Date
//   const options = {weekday:"long", year:"numeric", month:"long", day:"numeric"};
//   const dateStr = now.toLocaleDateString(undefined, options);

//   document.getElementById("time").textContent = timeStr;
//   document.getElementById("date").textContent = dateStr;
// }

// // har 1 sec baad update
// setInterval(updateClock, 1000);
// updateClock();

// // button click event
// document.getElementById("toggle").onclick = ()=>{
//   use24 = !use24;
//   updateClock();
// };
var date = new Date();
var hours = date.getHours()
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var date = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
// var ampm; 
var time = document.getElementById('time').textContent = "43"
// var toggle = document.getElementById('toggle')

function updateClock() {
}
setInterval(updateClock, 1000);
updateClock()