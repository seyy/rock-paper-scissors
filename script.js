const playerChoices = document.getElementById("playerChoice")
const playerChoices1 = document.getElementById("playerChoice2")
const playerChoices2 = document.getElementById("playerChoice3")
const div = document.getElementById("hej")
const div2 = document.getElementById("goBackButton")

let userChoice;
// FUNCTION THAT RANDOMLY SELECTS A BOT CHOICE

const myButton = document.createElement("button");
  myButton.innerText = "Play Again";
  myButton.classList.add("myButtonClass");

  myButton.addEventListener("click", function() {
    // Disable the button to prevent multiple clicks
    myButton.disabled = true;
    
    // Add a 1 second delay before navigating to the main HTML page
    setTimeout(function() {
      window.location.href = "rock-paper-scissors.html";
    }, 100);
  });

const computerChoice = () => {
    botChoice = Math.floor(Math.random() * 3);
    console.log(`bot choice: ${botChoice}`);
    if(botChoice === userChoice) {
      div.innerHTML = "It's a draw!";
      div2.appendChild(myButton);
    }

    if(botChoice === 0 && userChoice === 1) {
      div.innerHTML = "You win!"
      div2.appendChild(myButton);
    }
    
    if(botChoice === 0 && userChoice === 2) {
      div.innerHTML = "You lose!"
      div2.appendChild(myButton);
    }

    if(botChoice === 1 && userChoice === 0) {
      div.innerHTML = "You lose!"
      div2.appendChild(myButton);
    }

    if(botChoice === 1 && userChoice === 2) {
      div.innerHTML = "You win!"
      div2.appendChild(myButton);
    }

    if(botChoice === 2 && userChoice === 0) {
      div.innerHTML = "You win!"
      div2.appendChild(myButton);
    }

    if(botChoice === 2 && userChoice === 1) {
      div.innerHTML = "You lose!"
      div2.appendChild(myButton);
    }
}



// FUNCTIONS THAT TELL US WHICH CHOICE A PLAYER HAS MADE AND AFTER A CLICK ON BUTTON IT CALLS A FUNCTION computerChoice() which randomly selects a computer choice


playerChoices.addEventListener("click", () => {
  userChoice = 0;
  console.log(` userChoice: ${userChoice}`)
  computerChoice();
  playerChoices.disabled = true;
});
playerChoices1.addEventListener("click", () => {
  userChoice = 1;
  console.log(` userChoice: ${userChoice}`)
  computerChoice();
  playerChoices1.disabled = true;
});
playerChoices2.addEventListener("click", () => {
  userChoice = 2;
  console.log(` userChoice: ${userChoice}`)
  computerChoice();
  playerChoices2.disabled = true;
});
      



// BUTTON ANIMATION AFTER CLICKING

const btn = document.querySelectorAll('.btn');

btn.forEach(btn => {
    
btn.addEventListener("click", () => {
  btn.classList.add('animate'); // add the 'animate' class to the button when it's clicked
});

btn.addEventListener('transitionend', () => {
  btn.classList.remove('animate'); // remove the 'animate' class when the transition ends
});
});


