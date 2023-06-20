console.log('Main loaded');

//CONST
const chart1 = document.querySelector('#chart-1');
const leaderboard = document.querySelector('.leaderboard');
const leader1 = document.querySelector('.leader1');
const leader2 = document.querySelector('.leader2');
const leader3 = document.querySelector('.leader3');
//CONST

//LET
let cryptoDataNames = [];
let cryptoDataSupply = [];
let cryptoDataRanks = [];
let cryptoDataRankNames = [];
let cryptoDataRankSymbol = [];
let cryptoDataRankSupply = [];
let cryptoDataRankPercentage = [];
let cryptoDataRankPrice = [];
let redTextCount = 0;
let greenTextCount = 0;
//LET

//hier wordt de crypto gefetcht.
fetch('https://api.coincap.io/v2/assets')
    .then(data => data.json())
    .then(jsonData => jsonDataLoop(jsonData))
    .catch(error => {
        console.log('Er is iets mis:', error);
    });

function jsonDataLoop(jsonData) {
    console.log(jsonData);

    //forloop om data van de crypto fetch in de javascript te opslaand.
    for (let i = 0; i < jsonData.data.length; i++) {
        const cryptoData = jsonData.data[i];
        console.log(cryptoData.name);
        console.log(cryptoData.supply);

        //vanaf hier wordt crypto informatie opgeslagen in een array die kun je boven bij LET vinden.
        cryptoDataRanks.push(cryptoData.rank);
        cryptoDataRankNames.push(cryptoData.name);
        cryptoDataRankSymbol.push(cryptoData.symbol);
        cryptoDataRankSupply.push(cryptoData.supply);
        cryptoDataRankPrice.push(cryptoData.priceUsd);
        cryptoDataRankPercentage.push(cryptoData.changePercent24Hr);

        //haalt onnodife grote crypto supply weg.
        if (cryptoData.supply <= 10000000000) {
            cryptoDataNames.push(cryptoData.name);
            cryptoDataSupply.push(cryptoData.supply);
        }

        //als de crypto prijs omlaag is gegaan dan wordt de kleur rood
        if (cryptoDataRankPercentage[i] < 0) {
            colour = "danger";
            iconColour = "down";
            redTextCount++;
        } else {   //als de crypto prijs omhoog is gegaan dan wordt de kleur groen
            colour = "success";
            iconColour = "up";
            greenTextCount++;
        }

        //LEADER
        leader1.innerHTML = `Current Leader <p class="text-primary">${cryptoDataRankNames[0]}</p><br>`;
        //LEADER

        //PRICE RISEN
        leader2.innerHTML = `Crypto risen prices <p class="text-success">${greenTextCount}</p><br>`;
        //PRICE RISEN

        //PRICE FALLEN
        leader3.innerHTML = `Crypto fallen prices <p class="text-danger">${redTextCount}</p>`;
        //PRICE FALLEN

        // LEADERBOARD
        leaderboard.innerHTML += `<tr><td class="float-left text-center"><p>${cryptoDataRanks[i]}</p>${cryptoDataRankSymbol[i]} <p class="text-secondary">${cryptoDataRankNames[i]}</p></td></tr><td class="float-right text-center"><p class="text-${colour}">$${cryptoDataRankPrice[i]} <br><br> Supply: ${cryptoDataRankSupply[i]} <br><br> ${cryptoDataRankPercentage[i]}% <i class="bi bi-caret-${iconColour}-fill"></i></p></td><hr>`;
         // LEADERBOARD
    }

//hier owrdt de chart aangeroepen met parameters om data te geven
    createChart(chart1, cryptoDataNames, cryptoDataSupply, "red");
}

//hier wordt de chart aangemaakt
function createChart(canvas, labels, data, backgroundColor) {
    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: backgroundColor,
                label: 'Crypto supply',
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

//dit zorgt ervoor dat de leaderboard en 2e navbar tevoorschijn komt.
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 1650 ||
        document.documentElement.scrollTop > 1650
    ) {
        document.getElementById('navbar-animation').style.top = '0';
        document.getElementById('crypto-sub-page').style.animation =
            'fadeInBackground 0.2s forwards';
    } else {
        document.getElementById('navbar-animation').style.top = '-80px';
        document.getElementById('crypto-sub-page').style.animation =
            'fadeOutBackground 0.2s forwards';
    }
}
