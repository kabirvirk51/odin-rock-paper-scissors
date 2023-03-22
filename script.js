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






