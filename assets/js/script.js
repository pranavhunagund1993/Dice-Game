// get access to webpage elements
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let current1 = document.getElementById('current--0');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let holdBtn = document.querySelector('.btn--hold');

// Initialize the values to zero
score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

let scores = [0, 0];
let current = 0;
let activePlayer = 0;

// scores[activePlayer]
let switchPlayer = function() {
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

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
        document.getElementById(`current--${activePlayer}`).textContent = current;
        // current1.textContent = current;
    } else {
        switchPlayer();
    }

    //4. if the random number is 1 then reset current score to zero and change the active player
})

// Implement hold button functionality
holdBtn.addEventListener('click', function() {
    // 1. add current score to global score
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if the player has already reached maximum score
    if(scores[activePlayer] >= 20) {
        //finish the game
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`name--${activePlayer}`).textContent = 'Winner';
        // hide dice image
        dice.classList.add('hidden');
        rollDice.classList.add('hidden');
        holdBtn.classList.add('hidden');
    } else {
        switchPlayer();
    }
})