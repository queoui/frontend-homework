const interval = document.getElementById('number');
const submit = document.getElementById('submit');
const background = document.getElementById('background');
// Add your code here

submit.addEventListener('click', (event) => {
    setInterval(changeColor, interval*1000);
})

changeColor = function changeBackgroundColorEveryInterval() {
    background.innerHTML
    
}