const calvinChoiceBtn = document.querySelector('.calvin-choice');
const dieselChoiceBtn = document.querySelector('.diesel-choice');
const emporioChoiceBtn = document.querySelector('.emporio-choice');
const selectionContainer = document.querySelector('.choice-container');
const cardsRow = document.querySelector('.cards-row');

const BASE_URL = 'https://mbo-sd.nl/period3-fetch';

const URL_PER_CATEGORY = {
    'calvin': '/clothes-shirt-calvin-klein',
    'diesel': '/clothes-shirt-diesel',
    'emporio': '/clothes-shirt-emporio-armani'
};


calvinChoiceBtn.addEventListener('click', () => {
    selectCategory('calvin');
});

dieselChoiceBtn.addEventListener('click', () => {
    selectCategory('diesel');
});

emporioChoiceBtn.addEventListener('click', () => {
    selectCategory('emporio');
});

function selectCategory(category) {
    selectionContainer.remove();
    console.log(category)
    fetch(BASE_URL+URL_PER_CATEGORY[category])
    .then((res) => res.json())
    .then((res) => {
        let cards = [];
        res.forEach((product) => {
            cards.push(createCard(product));
        });
        displayCards(cards);
    });
}


function createCard(data) {
    const card = `
    <div class="card" style="min-width: 320px">
        <img class="card-img-top img-fluid" src="${data.imageUrl}">
        <div class="card-body">
            <h4 class="card-title text-center">
                ${data.title}
            </h4>
            <div class="card-text text-center mt-4">
                ${data.description}
            </div>
        </div>
        <div class="card-footer text-end">
            <strong>PRICE: $${data.price}</strong>
            <a href="#" class="btn btn-dark px-4 mx-2" role="button">
                BUY NOW!
            </a>
        </div>
    </div>
    `;
    return card;
}

function displayCards(cards) {
    let cardsHTML = '';
    cards.forEach((card) => {
        cardsHTML += `<div class="col-sm-4 pt-5">${card}</div>`;
    });
    cardsRow.innerHTML = cardsHTML;
}

