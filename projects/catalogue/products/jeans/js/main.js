const containerRow = document.querySelector('.row');

fetch('https://mbo-sd.nl/period3-fetch/clothes-jeans-hugo-boss')
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData, "Hugo Boss"));

fetch('https://mbo-sd.nl/period3-fetch/clothes-jeans-levi')
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData, "Levi"));

fetch('https://mbo-sd.nl/period3-fetch/clothes-jeans-ralph-lauren')
.then(myData => myData.json())
.then(jsonData => showInConsole(jsonData, "Ralph Lauren"));


function showInConsole(jsonData, category) {
    containerRow.innerHTML += `<h1 class="pt-5 pb-3">${category}</h1>`;
    jsonData.forEach((object) => {
        console.log(object)
        containerRow.innerHTML += `
        <div class="col-4">
            <div class="card">
                <img class="card-img-top" src="${object.imageUrl}" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">${object.title}</h4>
                    <p class="card-text">${object.description}</p>
                    <p class="card-text">Color: ${object.colour}</p>
                    <p class="card-text">Sizes: ${object.sizes[0]}, ${object.sizes[1]}, ${object.sizes[2]}</p>
                </div>
                <div class="card-footer">
                    PRICE: <strong>${object.price}</strong>
                    <button type="button" class="btn btn-dark float-end w-25">Buy</button>
                </div>
            </div>
        </div>
    `
    });
}