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

    computerSelection = getComputerChoice()
    computerSelection = computerSelection.toUpperCase();
    playerSelection = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        return 'It is a tie!'
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors'
    } else if (playerSelection === 'Paper' &&  computerSelection === 'Rock') {
        return 'You win! Paper beats Rock'
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! Scissors beats Paper'
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        return 'You lose! Rock beats Scissors'
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        return 'You lose! Paper beats Rock'
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You lose! Scissors beats Paper'
    } else {
        return 'Invalid Choice!'
    }

}



