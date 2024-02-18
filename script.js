const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

// Possible choices
const choices = ["rock", "paper", "scissors"];

// Computer choice
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)].toLowerCase();

let playerScore = 0;
let computerScore = 0;

// Get score
function printScore() {
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + computerScore);
}

// Play a round
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    console.log('Player 😃: ' + playerSelection);
    console.log('Computer 🤖: ' + computerSelection);

    // Win conditions
    if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }

    // Lose conditions
    if (
        computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection  === 'rock'
    ) {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    
    // Tie condition
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}!`;
    }
}

// Button event listeners
rockBtn.addEventListener('click', () => {
    console.log(playRound('rock'));
});
paperBtn.addEventListener('click', () => {
    console.log(playRound('paper'));
});
scissorsBtn.addEventListener('click', () => {
    console.log(playRound('scissors'));
});