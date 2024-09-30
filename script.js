
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.querySelector('#stopBtn'); // Use unique IDs
let startBtn = document.querySelector('#startBtn');
let resetBtn = document.querySelector('#resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;
let timerId = null;

// For start button
startBtn.addEventListener('click', function() {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function() {
  clearInterval(timerId);
});

resetBtn.addEventListener('click', function() {
  clearInterval(timerId);
  timerDisplay.innerHTML = '00:00:00';
  msec = secs = mins = 0;
});

function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    secs++;
    if (secs === 60) {
      secs = 0;
      mins++;
    }
  }

  let msecString = msec < 10 ? `0${msec}` : msec; // Correct string interpolation
  let secString = secs < 10 ? `0${secs}` : secs;
  let minsString = mins < 10 ? `0${mins}` : mins;

  timerDisplay.innerHTML = `${minsString}: ${secsString}: ${msecString}`;
}