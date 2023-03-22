function getComputerChoice() {

    let numChoice = Math.floor(Math.random() * 3 + 1);
    if (numChoice == 1) {
        let choice = 'Rock'
        console.log(choice);
    } else if (numChoice == 2) {
        let choice = 'Paper'
        console.log(choice);
    } else if (numChoice == 3) {
        let choice = 'Scissors'
        console.log(choice);
    }

}


getComputerChoice();