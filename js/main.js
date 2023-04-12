



const profileData = {
    username: 'DawDev',
    email: 'dawkaprol@gmail.com',
    birthDate: '07-08-2005',
    pfpUrl: './img/profile_picture.jpg',
    bio: 'Lorem Ipusm idrc rn',
    projects: [{}, {}],
    education: ['VMBO-KADER', 'MBO-4 SOFTWARE DEV'],
    skills: ['a', 'b', 'c', 'd'],
    bannerColor: 'red',
    socials: ['dont-care']
};


document.addEventListener('DOMContentLoaded', () => {
    const bannerElem = document.querySelector('.banner');
    const usernameElem = document.querySelector('.username');
    const profileImgElem = document.querySelector('.profile-image');
    
    bannerElem.style.backgroundColor = profileData.bannerColor;
    profileImgElem.src = profileData.pfpUrl;
    usernameElem.innerText = profileData.username;
});