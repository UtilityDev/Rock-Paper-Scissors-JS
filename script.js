const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');

const resultText = document.querySelector('.result-text');
const computerChoiceText = document.querySelector('.computer-choice');

// Possible choices
const choices = ["rock", "paper", "scissors"];

// Computer choice
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)].toLowerCase();

let playerScore = 0;
let computerScore = 0;

// Get score
function updateScore() {
    document.getElementById('player-score').textContent = "You: " + playerScore.toString();
    document.getElementById('computer-score').textContent = "Computer: " + computerScore.toString();
}

// Play a round
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    computerChoiceText.textContent = `🤖: ${computerSelection}`;

    // Win conditions
    if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'
    ) {
        playerScore++;
        updateScore();
        resultText.textContent = 'You win!';
    }

    // Lose conditions
    if (
        computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection  === 'rock'
    ) {
        computerScore++;
        updateScore();
        resultText.textContent = 'You lose!';
    }
    
    // Tie condition
    if (playerSelection === computerSelection) {
        resultText.textContent = 'It\'s a tie!';
    }
}

// Button event listeners
rockBtn.addEventListener('click', () => {
    playRound('rock');
});
paperBtn.addEventListener('click', () => {
    playRound('paper');
});
scissorsBtn.addEventListener('click', () => {
    playRound('scissors');
});