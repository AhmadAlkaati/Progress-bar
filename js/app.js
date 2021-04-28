const startBtn = document.querySelector('.start');
const fillDurationEl = document.querySelector('.fill-duration h1');
const colors = document.querySelectorAll('.color');
let colorValue;
let selectedOptionValue;
startBtn.addEventListener('click', function () {
  startBtn.setAttribute('disabled', true);
  getSelectedOption();
  startTimer();
  getClickedColor();
  const progressBar = document.querySelector('.progress-bar');

  fillDurationEl.innerHTML = selectedOptionValue;
  progressBar.style.transitionDuration = ` ${selectedOptionValue}s`;
  progressBar.style.background = colorValue;
  if (progressBar.classList.contains('progress-bar-animation')) {
    progressBar.classList.remove('progress-bar-animation');
    progressBar.style.transitionDuration = ` 0s`;
    setTimeout(() => {
      progressBar.classList.add('progress-bar-animation');
      progressBar.style.transitionDuration = `  ${selectedOptionValue}s`;
    }, 0.1);
  } else {
    progressBar.classList.add('progress-bar-animation');
  }
});

function getSelectedOption() {
  const selectEl = document.querySelector('select');
  selectedOptionValue = selectEl.value;
}

function startTimer() {
  let timer = selectedOptionValue;

  const timerInterval = setInterval(() => {
    timer--;
    fillDurationEl.innerHTML = timer;
    if (timer == 0) {
      clearInterval(timerInterval);
      startBtn.removeAttribute('disabled');
    }
  }, 1000);
}

function getClickedColor() {
  colors.forEach((color) => {
    color.addEventListener('click', function () {
      colorValue = color.innerHTML;
    });
  });
}

getClickedColor();
