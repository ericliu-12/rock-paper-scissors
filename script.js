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

function playGame() {
    let win = 0, tie = 0, loss = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter Rock, Paper, or Scissors");
        let currentRound = playRound(playerSelection, getComputerChoice());
        console.log(currentRound);
        let result = currentRound.charAt(4);
        console.log(result);
        if (result === "W") win++;
        else if (result == "T") tie++;
        else loss++;
    }
    console.log(`Your results are: ${win} wins, ${tie} ties, and ${loss} losses`);
}

playGame();