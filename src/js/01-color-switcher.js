const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
startBtn.addEventListener('click', () => {
    startBtn.setAttribute('disabled', 'disabled')
    intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000)
});
stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.setAttribute('enabled', 'enabled');
});
