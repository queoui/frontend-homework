const elem = document.querySelector('input');
let logNegative = document.getElementById('notPalindrome');
let logPositive = document.getElementById('isPalindrome');

elem.addEventListener('input', handleInput);

function handleInput(input) {
  inputString = input.target.value;
  if (inputString.length > 0) {
    if (isPalindrome(inputString)) {
      logPositive.textContent = 'Yes. This is a Palindrome';
      logNegative.textContent = null;
    } else {
      logNegative.textContent = 'No. Try Again.';
      logPositive.textContent = null;
    }
  }
}

function isPalindrome(inputString) {
  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
