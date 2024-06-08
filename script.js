let alarm = new Audio("alarm.mp3");
let timerStarted = false;

function startTimer() {
  if (!timerStarted) {
    let minutesInput = document.getElementById("minutes").value;
    let secondsInput = document.getElementById("seconds").value;
    let totalSeconds = parseInt(minutesInput) * 60 + parseInt(secondsInput);

    let startTime = new Date().getTime();
    let endTime = startTime + totalSeconds * 1000;

    setInterval(function () {
      let timeLeft = endTime - new Date().getTime();

      if (timeLeft > 0) {
        let minutes = Math.floor(timeLeft / (1000 * 60));
        let seconds = Math.round((timeLeft / 1000) % 60);
        seconds = ("0" + seconds).slice(-2);
        let text = ("0" + minutes).slice(-2) + " : " + seconds;
        document.getElementById("timer").innerHTML = text;
      } else {
        alarm.play();
        document.getElementById("timer").innerHTML = "00 : 00";
      }
    }, 1000);
    timerStarted = true;
  }
}
