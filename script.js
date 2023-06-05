let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let session = document.getElementById("session");

function displayTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }

  if (hours < 10) {
    hrs.innerHTML = "0" + hours;
  } else {
    hrs.innerHTML = hours;
  }
  if (minutes < 10) {
    min.innerHTML = "0" + minutes;
  } else {
    min.innerHTML = minutes;
  }
  if (seconds < 10) {
    sec.innerHTML = "0" + seconds;
  } else {
    sec.innerHTML = seconds;
  }
}
setInterval(displayTime);
