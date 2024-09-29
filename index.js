let hourDisplay = document.getElementById("hours");
let minuteDisplay = document.getElementById("minutes");
let secondDisplay = document.getElementById("seconds");
hours = 0;
minutes = 0;
seconds = 0;
let speed = 1000;
let interval;
let isRunning = false;
function startStopwatch() {
  if (!isRunning) {
    interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        minutes++;
        seconds = 0;
        if (minutes === 60) {
          hours++;
          minutes = 0;
        }
      }
      updateDisplay();
      isRunning = true;
    }, speed);
  }
}

function stopStopwatch() {
  isRunning = false;
  clearInterval(interval);
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  hourDisplay.innerHTML = String(hours).padStart(2, "0");
  minuteDisplay.innerHTML = String(minutes).padStart(2, "0");
  secondDisplay.innerHTML = String(seconds).padStart(2, "0");
}
