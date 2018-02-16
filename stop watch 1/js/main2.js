var timer2 = document.getElementById('timer2');
var toggleBtn2 = document.getElementById('toggle2');
var resetBtn2 = document.getElementById('reset2');

var watch2 = new Stopwatch(timer2);

function start2() {
  toggleBtn2.textContent = 'Stop';
  watch2.start();
}

function stop2() {
  toggleBtn2.textContent = 'Start';
  watch2.stop();
}

toggleBtn2.addEventListener('click', function() {
  watch2.isOn ? stop2() : start2();
});

resetBtn2.addEventListener('click', function() {
  watch2.reset();
});
