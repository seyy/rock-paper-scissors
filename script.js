const playerChoices = document.getElementById("playerChoice")
const playerChoices1 = document.getElementById("playerChoice2")
const playerChoices2 = document.getElementById("playerChoice3")



const computerChoice = () => {
    let number = Math.floor(Math.random() * 3)
    console.log(number)
}




playerChoices.addEventListener("click", computerChoice);
playerChoices1.addEventListener("click", computerChoice);
playerChoices2.addEventListener("click", computerChoice);


// BUTTON ANIMATION AFTER CLICKING

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  btn.classList.add('animate'); // add the 'animate' class to the button when it's clicked
});

btn.addEventListener('transitionend', () => {
  btn.classList.remove('animate'); // remove the 'animate' class when the transition ends
});

// KNOWING WHICH ONE A PLAYER CHOSE



    


