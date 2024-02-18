const choices = ["rock", "paper", "scissors"];

// Player choice
const playerChoice = prompt('Rock, paper, or scissors? ').toLowerCase();

// Computer choice
const getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)].toLowerCase();

function playRound(playerSelection, computerSelection) {
    console.log('Player 😃: ' + playerSelection);
    console.log('Computer 🤖: ' + computerSelection);

    // Win conditions
    if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock'
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }

    // Lose conditions
    if (
        computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection  === 'rock'
    ) {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
    
    // Tie condition
    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}!`;
    }
}
console.log(playRound(playerChoice, getComputerChoice()));