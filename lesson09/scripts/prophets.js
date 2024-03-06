const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        fullName.innerText = `${prophet.name} ${prophet.lastname}`;
        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Picture of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

async function getProphetData(url){
    let response = await fetch(url);
    let data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData(url);