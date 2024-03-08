function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3)) + 1;
    if (choice === 1) return "Rock"
    if (choice === 2) return "Paper"
    else return "Scissors"
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "rock") return "You Tie! Rock ties Rock";
    if (playerSelection === "rock" && computerSelection === "paper") return "You Lose! Paper beats Rock";
    if (playerSelection === "rock" && computerSelection === "scissors") return "You Win! Rock beats Scissors"
    if (playerSelection === "paper" && computerSelection === "rock") return "You Win! Paper beats Rock";
    if (playerSelection === "paper" && computerSelection === "paper") return "You Tie! Paper ties Paper"
    if (playerSelection === "paper" && computerSelection === "scissors") return "You Lose! Scissors beats Paper"
    if (playerSelection === "scissors" && computerSelection === "rock") return "You Lose! Rock beats Scissors"
    if (playerSelection === "scissors" && computerSelection === "paper") return "You Win! Scissors beats Paper"
    if (playerSelection === "scissors" && computerSelection === "scissors") return "You Tie! Scissors ties Scissors"
}
