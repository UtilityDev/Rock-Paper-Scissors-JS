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

function playRound(playerSelection, computerSelection) {
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

function playGame() {
    for (let i = 0; i < 5; i++) {
        // Player choice
        const playerChoice = prompt('Rock, paper, or scissors? ').toLowerCase();
        console.log(playRound(playerChoice, getComputerChoice()));

        printScore();
    }

    if (playerScore > computerScore) {
        console.log(`You win! You beat the computer by ${playerScore - computerScore} point(s)!`);
    } else if (computerScore > playerScore) {
        console.log(`You lost! The computer beat you by ${computerScore - playerScore} point(s)!`);
    } else if (playerScore === computerScore) {
        console.log(`It's a tie! Both you and the computer got ${playerScore} point(s)!`);
    }
}

playGame();