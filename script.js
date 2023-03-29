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


function game() {


let playerScore = 0; 
let gameScore = 0;

for (let i = 0; i!=5; i++) {   
    let computerSelection = getComputerChoice();  
    let playerSelection = window.prompt("Rock, Paper or Scissors?");
    console.log(playRound(playerSelection, computerSelection));

  let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === 'You win! Rock beats Scissors' || roundResult === 'You win! Paper beats Rock' || roundResult === 'You win! Scissors beats Paper') {
        playerScore += 1;
        console.log('Player Score: ' + playerScore);
    } else if (roundResult === 'You lose! Rock beats Scissors' || roundResult === 'You lose! Paper beats Rock' ||roundResult ===  'You lose! Scissors beats Paper') {
        gameScore += 1;
        console.log('Game Score: ' + gameScore);
    } else if (roundResult === 'Invalid Choice!' || roundResult === 'It is a tie!') {
        console.log('Try Again!');
    }

} 

if (playerScore > gameScore) {
    console.log("You Won! " + "Final Score is: " + playerScore + " - " + gameScore);
} else if (gameScore > playerScore) {
    console.log("You Lost " + "Final Score is: " + gameScore + " - " + playerScore);
} else if (playerScore === gameScore ) {
    console.log("The game is a tie!")
}
}

game();

