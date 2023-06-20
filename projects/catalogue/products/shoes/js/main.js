const containerRow = document.querySelector('.row');

//fetch toegevoegd
fetch('https://mbo-sd.nl/period3-fetch/clothes-shoe-dr-martens')
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData, "Dr-Martens"));

fetch('https://mbo-sd.nl/period3-fetch/clothes-shoe-nike')
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData, "Nike"));

fetch('https://mbo-sd.nl/period3-fetch/clothes-shoe-puma')
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData, "Puma"));

function showInConsole(jsonData, category) {
    containerRow.innerHTML += `<h1 class="pt-5 pb-3">${category}</h1>`;
    jsonData.forEach((object) => {
         console.log(object)   // ik laat de foto's en prijs op pagina zien
        containerRow.innerHTML += `
        <div class="col-4">
            <div class="card">
                <img class="card-img-top" src="${object.imageUrl}" alt="Title">
                <div class="card-body">
                <h4 class="card-title">${object.title}</h4>
                </div>
                <div class="card-footer">
                PRICE: <strong>${object.price}</strong> 
                <button type="button" class="btn btn-dark float-end w-25">Buy</button>
            </div>
                </div>
                </div>
            `  //een koop button toegevoegd
            });
        }