//LET
let input = document.body.querySelector('.chatBotInput');
let chatBox = document.getElementById('textbox');
let chatBoxBot = document.getElementById('textbox-bot');
let chatLogWrapper = document.getElementById('chatLogWrapper');
//LET

//Hier wordt een functie aangeroepen, deze functie vraagt de gebruiker of de chatbot iets for de gebruiker kan doen.
botFusudaGreeting();

//INPUT

//Hier wordt er gevraagt aan de gebruiker of de chatbot iets for de gebruiker kan doen.
function botFusudaGreeting() {
  setTimeout(() => { chatBoxBot.innerHTML += `<p class="text-light bot-bubble bg-dark bg-gradient">Hello! I am Fasuda bot, how can i help? (type "help" for commands)</p>` }, 1500);
}


input.addEventListener("keydown", function (event) { //Wanneer er "ENTER" wordt gedrukt dan wordt de inputveld leeg gemaakt en dan checkt de function of er woorden overeenkomen.
  if (event.key === 'Enter') {
    let inputValue = event.target.value.trim().toLowerCase(); //trim() zorgt ervoor dat er niet alleen maar spaties gestuurd kunnen worden. toLowerCase() maakt alle hoofdletters, kleineletters.

    if (inputValue !== "") { //er wordt alleen gecheckt naar input als er tenminste iets is ingevoerd.
      console.log('Input Value:', inputValue);
      chatBox.innerHTML += `<div class="message-container user-message"><p class="user-bubble text-light bg-danger bg-gradient">${inputValue}</p></div>`;
      event.target.value = ""; //dit maakt de inputveld weer leeg
      chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight; //dit zorgt ervoor dat wanneer een bericht wordt gestuurd dat de chatbot automatisch naar beneden scrolt.

      //CONVERSATION
      if (inputValue === "help") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Commands <br><br> -about us <br> -log me out <br> -send me to home <br> -send me to student summary <br> -send me to weather summary <br> -send me to crypto summary <br> -how does student summary work? <br> -how does weather summary work? <br> -how does crypto summary work? <br> -support </p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
      } if (chatBox.innerHTML.includes("Commands")) {
        if (inputValue === "yes") {
          setTimeout(() => {
            chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Alright! You can ask me questions like: Can you log me out? Or can you send me to "Home or Dashboard"?</p></div>`;
            chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
          }, 1500);
        }
        if (inputValue === "no") {
          setTimeout(() => {
            chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Ok, you can still ask me questions like: Can you log me out? Or can you send me to "Home or Dashboard"? For now, have a great day!</p></div>`;
            chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
          }, 1500);
        }
      }
      if (inputValue === "can you send me to student summary?" || inputValue === "send me to student summary") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Ok, sending you to student summary...</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
        setTimeout(() => {
          window.location.href = "dawidboard.html"
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 3500);
      }

      if (inputValue === "can you send me to weather summary?" || inputValue === "send me to weather summary") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Ok, sending you to weather summary...</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
        setTimeout(() => {
          window.location.href = "suliboard.html"
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 3500);
      }

      if (inputValue === "can you send me to crypto summary?" || inputValue === "send me to crypto summary") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Ok, sending you to crypto summary...</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
        setTimeout(() => {
          window.location.href = "Farisboard.html"
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 3500);
      }

      if (inputValue === "about us" || inputValue === "tell about you") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">We are Sulaiman, Dawid and Faris. </p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">We are upcoming software developers that have created multiple projects including games like an escape room and TicTacToe.</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 3500);
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">We've also created a few websites such as a clothing site and some portfolios.</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 8500);
      }

      if (inputValue === "how does student summary work?" || inputValue === "how does student summary work") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">In the student summary page you can pick between a student on the top left, when you have picked a student you can check their grades information.</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
      }

      if (inputValue === "how does crypto summary work?" || inputValue === "how does crypto summary work") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">In the crypto summary page you can see realtime crypto price changes.</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
      }

      if (inputValue === "how does weather summary work?" || inputValue === "how does weather summary work") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">In the weather summary page you can find weather information about Amsterdam in the Netherlands. </p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
      }

      if (inputValue === "can you send me to home?" || inputValue === "can you send me to home" || inputValue === "go to home" || inputValue === "please go to home" || inputValue === "send me to home" || inputValue === "take me to home") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Ok, sending you to the homepage...</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
        setTimeout(() => {
          window.location.href = "index.html"
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 2000);
      }

      if (inputValue === "support") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Phone number: 06 51346790 <br> Email: Fasuda@hotmail.com <br> Location: The Hague, Leeghwaterplein 72</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
        
      }
      if (inputValue === "can you log me out?" || inputValue === "can you log me out" || inputValue === "log me out" || inputValue === "please log me out" || inputValue === "log out") {
        setTimeout(() => {
          chatBox.innerHTML += `<div class="message-container bot-message"><p class="text-light bot-bubble bg-dark bg-gradient">Ok, logging you out...</p></div>`;
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 1500);
        setTimeout(() => {
          window.location.href = "logout.html"
          chatLogWrapper.scrollTop = chatLogWrapper.scrollHeight;
        }, 3500);
      }
    }
    //CONVERSATION

  }
});
//INPUT








