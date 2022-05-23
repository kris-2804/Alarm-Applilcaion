let [milisecond, second, minutes, hours] = [1000, 0, 0, 0];
const hourElem = document.getElementById("Hours");
const display = document.querySelector(".TimerScreen");

const secondsElem = document.getElementById("Seconds");
const minutesElem = document.getElementById("Minutes");
let alarm = new Audio(
  "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
);
var m, M, s, H;
var intervalId;
let timestamps = document.getElementById("Populate");

function setvalues() {
  if (hourElem.value == "" || hourElem.value == null || !hourElem.value) {
    hourElem.value = 0;
  }
  if (
    minutesElem.value == "" ||
    minutesElem.value == null ||
    !minutesElem.value
  ) {
    minutesElem.value = 0;
  }
  if (
    secondsElem.value == "" ||
    secondsElem.value == null ||
    !secondsElem.value
  ) {
    secondsElem.value = 0;
  }

  hours = hourElem.value;
  minutes = minutesElem.value;
  second = secondsElem.value;
}
function Count() {
  if (second > 0 || minutes > 0 || hours > 0) {
    milisecond -= 10;
  }
  if (milisecond == 0 && (second > 0 || minutes > 0 || hours > 0)) {
    if (second == 0 && minutes) {
      second = 60;
      console.log("Entred Inner");

      if (minutes == 0 && hours) {
        minutes = 60;
        hours--;
      }

      minutes--;
    }
    second--;
    milisecond = 1000;
  } else if (second == 0 && minutes == 0 && hours == 0) {
    console.log("Called");
    clearInterval(intervalId);
    alarm.play();
    hourElem.value = 0;
    minutesElem.value = 0;
    secondsElem.value = 0;
    display.innerHTML = `<p>00:00:00:000 </p>`;

    if (confirm("Do you want to clear all the time stamps")) {
      timestamps.innerHTML = "";
    }
    return;
  }

  milisecond < 10 ? (m = "0" + milisecond) : (m = milisecond);
  minutes < 10 ? (M = "0" + minutes) : (M = minutes);
  second < 10 ? (s = "0" + second) : (s = second);
  hours < 10 ? (H = "0" + hours) : (H = hours);

  display.innerHTML = `${H}:${M}:${s}:${m}`;
}
function startTimer() {
  intervalId = setInterval(Count, 10);
  console.log(intervalId);
}

function addTimeStamp() {
  timestamps.innerHTML += `<li class=" text-center">${H}:${M}:${s}:${m}  </li>`;
}
function Reset() {
  hours = 0;
  minutes = 0;
  second = 0;
  alarm.pause();
  timestamps.innerHTML = "";
  display.innerHTML = `<p>00:00:00:000 </p>`;
  intervalId ?  clearInterval(intervalId) : null
  hourElem.value = 0;
  minutesElem.value = 0;
  secondsElem.value = 0;

}
