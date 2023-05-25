const PROJECT_DATA_URL = '../profiledata/projectdata.json';

function createCard(projectData) {
    const cardHTML = `
        <div class="card">
            <img src="${projectData.imageURL}" class="card-img-top" alt="${projectData.title} image">
            <div class="card-body">
                <h5 class="card-title">${projectData.title}</h5>
                <p class="card-text">${projectData.description}</p>
                <a href="./project.html?id=${projectData.ID}" class="btn btn-primary">Take a closer look!</a>
            </div>
        </div>
    `;
    return cardHTML;
}

fetch(PROJECT_DATA_URL)
    .then(fetchedData => fetchedData.json())
    .then(projectsData => displayProjects(projectsData));



function displayProjects(projectsData) {
    projectsData.forEach(project => {
        console.table(project);
        document.body.innerHTML += createCard(project);
    });
}