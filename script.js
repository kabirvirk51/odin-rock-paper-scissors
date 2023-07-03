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

/* for (let i = 0; i!=5; i++) {   */
    let computerSelection = getComputerChoice();  
    let playerSelection = 'rock'

    const body = document.querySelector('#outerContainer') 

    const output = document.createElement('div')
    output.textContent = 'Welcome to my Rock, Paper and Scissors game. Please select either Rock, Paper or Scissors:'
    output.style.cssText = 'display: flex; justify-content: center; margin-top: 128px; margin-bottom: 128px; font-size: 32px; font-weight: 600px; color: black;';
    
    outerContainer.appendChild(output);

    const container = document.querySelector("#container")

    container.style.cssText = 'display: flex; justify-content: center;'

    const rpsChoice1 = document.createElement('button')
    rpsChoice1.classList.add('Rock');
    rpsChoice1.textContent = 'Rock';
    
    rpsChoice1.style.cssText = 'margin: 64px; background-color: violet; color: white; padding: 16px; font-size: 32px; border: white; border-radius: 12px;'

    rpsChoice1.addEventListener('click', () => {
        playerSelection = 'rock';
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
    
    //} 
    
    if (playerScore > gameScore) {
        console.log("You Won! " + "Final Score is: " + playerScore + " - " + gameScore);
    } else if (gameScore > playerScore) {
        console.log("You Lost " + "Final Score is: " + gameScore + " - " + playerScore);
    } else if (playerScore === gameScore ) {
        console.log("The game is a tie!")
    }
       });
    
    const rpsChoice2 = document.createElement('button')
    rpsChoice2.classList.add('Paper');
    rpsChoice2.textContent = 'Paper';

    rpsChoice2.style.cssText = 'margin: 64px; background-color: violet; color: white; padding: 16px; font-size: 32px; border: white; border-radius: 12px;'

    rpsChoice2.addEventListener('click', () => {
        playerSelection = 'paper';
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

//} 

if (playerScore > gameScore) {
    console.log("You Won! " + "Final Score is: " + playerScore + " - " + gameScore);
} else if (gameScore > playerScore) {
    console.log("You Lost " + "Final Score is: " + gameScore + " - " + playerScore);
} else if (playerScore === gameScore ) {
    console.log("The game is a tie!")
}
       });
    
    const rpsChoice3 = document.createElement('button')
    rpsChoice3.classList.add('Scissors');
    rpsChoice3.textContent = 'Scissors';

    rpsChoice3.style.cssText = 'margin: 64px; background-color: violet; color: white; padding: 16px; font-size: 32px;border: white; border-radius: 12px;'

    rpsChoice3.addEventListener('click', () => {
        playerSelection = 'scissors';
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

//} 

if (playerScore > gameScore) {
    console.log("You Won! " + "Final Score is: " + playerScore + " - " + gameScore);
} else if (gameScore > playerScore) {
    console.log("You Lost " + "Final Score is: " + gameScore + " - " + playerScore);
} else if (playerScore === gameScore ) {
    console.log("The game is a tie!")
} 
       });
    
    
    container.appendChild(rpsChoice1);
    container.appendChild(rpsChoice2);
    container.appendChild(rpsChoice3);

   
    
    

  /*let roundResult = playRound(playerSelection, computerSelection);

    if (roundResult === 'You win! Rock beats Scissors' || roundResult === 'You win! Paper beats Rock' || roundResult === 'You win! Scissors beats Paper') {
        playerScore += 1;
        console.log('Player Score: ' + playerScore);
    } else if (roundResult === 'You lose! Rock beats Scissors' || roundResult === 'You lose! Paper beats Rock' ||roundResult ===  'You lose! Scissors beats Paper') {
        gameScore += 1;
        console.log('Game Score: ' + gameScore);
    } else if (roundResult === 'Invalid Choice!' || roundResult === 'It is a tie!') {
        console.log('Try Again!');
    }

//} 

if (playerScore > gameScore) {
    console.log("You Won! " + "Final Score is: " + playerScore + " - " + gameScore);
} else if (gameScore > playerScore) {
    console.log("You Lost " + "Finalt Score is: " + gameScore + " - " + playerScore);
} else if (playerScore === gameScore ) {
    console.log("The game is a tie!")
} */
}

game();

