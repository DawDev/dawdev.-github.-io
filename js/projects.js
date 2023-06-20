const PROJECT_DATA_URL = '../profiledata/projectdata.json';
const projectsCardContainer = document.querySelector('.projects-row');


function createCard(projectData) {
    const cardHTML = `
        <div class="col-md-3">
            <div class="card">
                <img src="${projectData.imageURL}" class="card-img-top" alt="${projectData.title} image">
                <div class="card-body">
                    <h5 class="card-title">${projectData.title}</h5>
                    <p class="card-text">${projectData.description}</p>
                    <a href="${projectData.url}" class="btn btn-primary">Take a closer look!</a>
                </div>
            </div>
        </div>
    `;
    return cardHTML;
}

fetch(PROJECT_DATA_URL)
    .then(fetchedData => fetchedData.json())
    .then(projectsData => displayProjects(projectsData));



function displayProjects(projectsData) {
    projectsData.forEach((project, ind) => {
        console.table(project);
        projectsCardContainer.innerHTML += createCard(project);
    });
}