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
    col.classList.add('col');
    col.classList.add('col-md-3');
    col.classList.add('w-10');
    col.classList.add('mb-4');

    // create the card
    const card = document.createElement('div');
    card.classList.add('card');

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
    characterImage.classList.add('card-img-top');
    characterImage.alt = character.alt;
    characterImage.src = character.imageUrl;

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
