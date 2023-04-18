const interval = document.getElementById('number').value;
const submit = document.getElementById('submit');
// const background = document.getElementById('background');
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

submit.addEventListener('click', () => {
  console.log(interval);
  setInterval(changeColor, Number(interval * 1000));
});
