function dayDate(){
let newDate= new Date;
let day=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday")
let date = newDate.getDate();
let dayName = day[newDate.getDay()];
document.getElementById("day").innerHTML = dayName + " " + date;
}

dayDate()

function showTime()
{
  let hours;
  let mminutes;
  let time=new Date()
  hours= time.getHours();
  minutes= time.getMinutes();
  if(minutes < 10)
      {
          minutes = "0" + minutes
      }
document.getElementById("time").innerHTML = hours + ":" + minutes;
} 
