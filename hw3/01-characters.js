// url for the Thrones API

document.addEventListener('DOMContentLoaded', async () => {
  const url = 'https://thronesapi.com/api/v2/Characters';
  const response = await fetch(url);
  const data = await response.json();

  // select the container element in the HTML file
  const container = document.querySelector('.row');

  // iterate through the array and create a card for each object
  data.forEach((character) => {
    // create the column
    const col = document.createElement('div');
    col.setAttribute('class', 'col w-10 mb-4');

    // create the card
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.width = '225px';
    card.style.height = '350px';

    // create the card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // create the character name element
    const characterName = document.createElement('h5');
    characterName.classList.add('card-title');
    characterName.textContent = character.fullName;

    // create the character description element
    const characterDescription = document.createElement('p');
    characterDescription.classList.add('card-text');
    characterDescription.textContent = character.title;

    // create the character image element
    const characterImage = document.createElement('img');
    characterImage.setAttribute('class', 'card-img-top, my-3, mx-2');

    characterImage.alt = character.fullName.concat(' character photo');
    characterImage.src = character.imageUrl;
    characterImage.setAttribute('class', 'justify-content: center, my-3');

    // append the elements to the card body
    cardBody.appendChild(characterName);
    cardBody.appendChild(characterDescription);

    // append elements to the card
    card.appendChild(characterImage);
    card.appendChild(cardBody);

    // append the card to the container
    container.appendChild(col);
    col.appendChild(card);
  });
});
