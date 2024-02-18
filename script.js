const choices = ["rock", "paper", "scissors"];

let playerChoice = prompt('Rock, paper, or scissors? ').toLowerCase();

// Computer choice
let getComputerChoice = () => choices[Math.floor(Math.random() * choices.length)];