const playerChoices = document.getElementById("playerChoice")
const playerChoices1 = document.getElementById("playerChoice2")
const playerChoices2 = document.getElementById("playerChoice3")



const computerChoice = () => {
    let botChoice = Math.floor(Math.random() * 3);
    console.log(`bot choice: ${botChoice}`);
}


// FUNCTIONS THAT TELL US WHICH CHOICE A PLAYER HAS MADE AND AFTER A CLICK ON BUTTON IT CALLS A FUNCTION computerChoice() which randomly selects a computer choice

playerChoices.addEventListener("click", () => {
    let userChoice = 1;
    console.log(` userChoice: ${userChoice}`)
    computerChoice();
});
playerChoices1.addEventListener("click", () => {
    let userChoice = 2
    console.log(` userChoice: ${userChoice}`)
    computerChoice();
});
playerChoices2.addEventListener("click", () => {
   let userChoice = 3
   console.log(` userChoice: ${userChoice}`)
   computerChoice();
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


// DECIDING WHO WON THE GAME.

if(userChoice === botChoice) {       //ITS A DRAW
    
}

if(userChoice === 1 && botChoice === 3) {     // USER WINS

}

if(userChoice === 1 && botChoice === 2) {      // BOT WINS

}

if(userChoice === 2 && botChoice === 1) {      // USER WINS

}

if(userChoice === 2 && botChoice === 3) {       //BOT WINS

}

if(userChoice === 3 && botChoice === 2) {       // USER WINS

}

if(userChoice ===3 && botChoice ===1 ) {        // BOT WINS

}



    



