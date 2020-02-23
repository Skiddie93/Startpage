var x= new Date;
var day=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday",
            "Friday","Saturday")

var y = x.getDate();

var dayName = day[x.getDay()];



document.getElementById("day").innerHTML = dayName + " " + y;

function showTime()
{
  var h=new Date()
  var m=new Date()
  var s=new Date()
  var time=new Date()

  h= time.getHours();
  m= time.getMinutes();
  s= time.getSeconds();

  if(m < 10)
      {
          m = "0" + m
      }
      if(s < 10)
      {
          s = "0" + s
      }
document.getElementById("something").innerHTML = h + ":" + m;

}
