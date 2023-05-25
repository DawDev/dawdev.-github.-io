
const bannerElem = document.querySelector('.banner');
const usernameElem = document.querySelector('.username');
const profileImgElem = document.querySelector('.profile-image');
const skillListElem = document.querySelector('.skill-list');
const aboutMe = document.querySelector('.about-me');
const quoteElement = document.querySelector('.quote');
const quoteAuthorElement = document.querySelector('.quote-author');
const emailElem = document.querySelector('.email-elem');

// const profileData = {
//     username: 'DawDev',
//     email: 'dawkaprol@gmail.com',
//     birthDate: '07-08-2005',
//     pfpUrl: './img/profile_picture.jpg',
//     bio: 'Lorem Ipusm idrc rn',
//     projects: [{}, {}],
//     education: ['VMBO-KADER', 'MBO-4 SOFTWARE DEV'],
//     skills: ['a', 'b', 'c', 'd'],
//     bannerColor: 'red',
//     socials: ['dont-care']
// };


fetch('/profiledata/quotes.json')
    .then(fetchedData => fetchedData.json())
    .then(quotes => {
        const quote = quotes[getRandomInt(quotes.length)];
        quoteElement.innerText = quote.text;
        quoteAuthorElement.innerHTML = `- ${quote.author != null ? quote.author : 'Unknown' }`;
    });


fetch('/profiledata/profiledata.json')
    .then(fetchedData => fetchedData.json())
    .then(jsonData => addData(jsonData));




function addData(profileData) {
    bannerElem.style.backgroundColor = profileData.bannerColor;
    profileImgElem.src = profileData.pfpUrl;
    usernameElem.innerText = profileData.username;
    aboutMe.innerText = profileData.aboutMe;
    emailElem.innerHTML = profileData.email;
    
    profileData.skills.forEach((skill) => {
        skillListElem.innerHTML += `<li class="list-group-item">${skill}</li>`; 
    });
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  