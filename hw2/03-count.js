// // Add your code here
const box = document.getElementById('textBlock');

const search = document.getElementById('search');
const originalText = document.getElementById('textBlock').innerText;

search.addEventListener('input', (event) => {
  const searchText = event.target.value;
  if (searchText === '') {
    box.innerHTML = originalText;
  } else {
    const regex = new RegExp(searchText, 'gi');
    let text = box.innerHTML;
    text = text.replace(/(<mark>|<\/mark>)/gim, '');
    const newText = text.replace(regex, '<mark>$&</mark>');
    box.innerHTML = newText;
  }
});
