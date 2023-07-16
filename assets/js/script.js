// get access to webpage elements
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current1 = document.getElementById('current--0');

// Initialize the values to zero
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let current = 0;

// Implement functionality for roll dice button
rollDice.addEventListener('click', function() {
    //1. generate a random number - 1 to 6
    let diceNumber = Math.trunc(Math.random() * 6 ) + 1;
    // console.log(diceNumber);

    //2. display the dice image with the random number
    dice.classList.remove('hidden');
    dice.src = `assets/images/dice-${diceNumber}.png`

    //3. if the random number is not 1 then add it to active player current score
    if(diceNumber != 1) {
        current += diceNumber;
        current1.textContent = current;
    }

    //4. if the random number is 1 then reset current score to zero and change the active player
})