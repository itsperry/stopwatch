var timer1 = document.getElementById('timer1');
var toggleBtn1 = document.getElementById('toggle1');
var resetBtn1 = document.getElementById('reset1');

var watch1 = new Stopwatch(timer1);

function start1() {
  toggleBtn1.textContent = 'Stop';
  watch1.start();
}

function stop1() {
  toggleBtn1.textContent = 'Start';
  watch1.stop();
}

toggleBtn1.addEventListener('click', function() {
  watch1.isOn ? stop1() : start1();
});

resetBtn1.addEventListener('click', function() {
  watch1.reset();
});
