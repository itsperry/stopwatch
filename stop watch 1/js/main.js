var toggleBtn1 = document.getElementById('toggle1');
var resetBtn1 = document.getElementById('reset1');
var toggleBtn2 = document.getElementById('toggle2');
var resetBtn2 = document.getElementById('reset2');

var watch1 = new Stopwatch(timer1);
var watch2 = new Stopwatch(timer2);

function start() {
	toggleBtn1.textContent = 'Stop';
	watch1.start();
	toggleBtn2.textContent = 'Stop';
	watch2.start();
}

