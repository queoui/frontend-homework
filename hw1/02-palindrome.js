const elem = document.querySelector('input');
const logNegative = document.getElementById('notPalindrome');
const logPositive = document.getElementById('isPalindrome');

const isPalindrome = function isPalindromeCheck(inputString) {
  for (let i = 0; i < inputString.length / 2; i += 1) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const handleInput = function handleInputForPalindrome(input) {
  const inputString = input.target.value;
  logNegative.textContent = null;
  logPositive.textContent = null;
  if (inputString.length > 0) {
    if (isPalindrome(inputString)) {
      logPositive.textContent = 'Yes. This is a Palindrome!';
    } else {
      logNegative.textContent = 'No. Try again.';
    }
  }
};

elem.addEventListener('input', handleInput);
