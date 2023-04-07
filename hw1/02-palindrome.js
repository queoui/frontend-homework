const elem = document.querySelector('input');
let log = document.getElementById('values');
elem.addEventListener('input', handleInput);

function handleInput(input) {
  inputString = input.target.value;
  if (inputString.length > 0) {
    log.textContent = isPalindrome(inputString);
  }
}

function isPalindrome(inputString) {
  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return 'No. Try again.';
    }
  }
  return 'Yes. This is a palindrome!';
}
