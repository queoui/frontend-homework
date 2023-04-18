const button = document.getElementById('button');
let intervalStatus = 0;
// Add your code here

// https://stackoverflow.com/questions/1484506/random-color-generator
const randomColor = function generateRandomRGB() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  color += '80';
  return color;
};

const changeColor = function changeBackgroundColorEveryInterval() {
  document.body.style.background = randomColor();
};

button.addEventListener('click', () => {
  const interval = document.getElementById('number').value;
  if (button.value === 'Start') {
    intervalStatus = setInterval(changeColor, Number(interval * 1000));
    button.value = 'Stop';
    button.className = 'btn btn-danger my-3 mx-3';
  } else {
    clearInterval(intervalStatus);
    button.value = 'Start';
    button.className = 'btn btn-primary my-3 mx-3';
  }
});
