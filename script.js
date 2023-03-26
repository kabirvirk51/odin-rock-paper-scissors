function getComputerChoice() {

    let numChoice = Math.floor(Math.random() * 3 + 1);
    if (numChoice == 1) {
        let choice = 'Rock'
        return choice
    } else if (numChoice == 2) {
        let choice = 'Paper'
        return choice
    } else if (numChoice == 3) {
        let choice = 'Scissors'
        return choice
    }

}

function playRound(playerSelection, computerSelection) {

    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return 'It is a tie!'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelection == 'paper' &&  computerSelection == 'rock') {
        return 'You win! Paper beats Rock'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats Paper'
    } else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return 'You lose! Rock beats Scissors'
    } else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return 'You lose! Paper beats Rock'
    } else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return 'You lose! Scissors beats Paper'
    } else if (playerSelection != 'rock' && playerSelection != 'scissors' && playerSelection != 'paper') {
        return 'Invalid Choice!'
    }

}


const computerSelection = getComputerChoice();
const playerSelection = 'paper'
console.log(playRound(playerSelection, computerSelection));

