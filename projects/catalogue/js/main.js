console.log('Main JS loaded');

const nickNameInput= document.querySelector('.nickname-input');
const emailInput = document.querySelector('.email-input')
const sendButton = document.querySelector('.send-button')
const questionInput = document.querySelector('.question-input')
const formElem = document.querySelector('.input-form');
sendButton.addEventListener('click', validateInput)

function validateInput() {
    // formElem.classList.add('was-validated');

    const nickNameText = nickNameInput.value; 
    const emailText = emailInput.value
    const questionText = questionInput.value
      if (nickNameText == '' || emailText == '' || questionText == '') {
         alert('Form filled incorrectly') 
     } else {
         alert('Form filled correctly')
     }
}


