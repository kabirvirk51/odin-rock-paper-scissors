function getComputerChoice() {
  let numChoice = Math.floor(Math.random() * 3 + 1);
  if (numChoice == 1) {
    let choice = "Rock";
    return choice;
  } else if (numChoice == 2) {
    let choice = "Paper";
    return choice;
  } else if (numChoice == 3) {
    let choice = "Scissors";
    return choice;
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == computerSelection) {
    return "It is a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beats Paper";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You lose! Rock beats Scissors";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return "You lose! Paper beats Rock";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You lose! Scissors beats Paper";
  } else if (
    playerSelection != "rock" &&
    playerSelection != "scissors" &&
    playerSelection != "paper"
  ) {
    return "Invalid Choice!";
  }
}

function game() {
  let playerScore = 0;
  let gameScore = 0;

  let computerSelection = "rock";
  let playerSelection = "rock";

  const body = document.querySelector("#outerContainer");

  const output = document.createElement("div");
  output.textContent =
    "Welcome to my Rock, Paper and Scissors game. Please select either Rock, Paper or Scissors:";
  output.style.cssText =
    "display: flex; justify-content: center; margin-top: 128px; margin-bottom: 64px; font-size: 32px; font-weight: 600px; color: black;";

  outerContainer.appendChild(output);

  const container = document.querySelector("#container");

  container.style.cssText = "display: flex; justify-content: center;";

  const rpsChoice1 = document.createElement("button");
  rpsChoice1.classList.add("Rock");
  rpsChoice1.textContent = "Rock";

  rpsChoice1.style.cssText =
    "margin: 64px; background-color: violet; color: white; padding: 16px; font-size: 32px; border: white; border-radius: 12px;";

  rpsChoice1.addEventListener("click", () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);

    const roundResultDIVOut = document.querySelector("#innerContainer1");

    // Remove existing roundResultDIV element if it exists
    const existingRoundResultDIV = document.querySelector("#roundResultDIV");
    if (existingRoundResultDIV) {
      existingRoundResultDIV.remove();
    }

    roundResultDIV = document.createElement("div");
    roundResultDIV.id = "roundResultDIV";
    roundResultDIV.textContent = roundResult;
    roundResultDIV.style.cssText =
      "display: flex; justify-content: center; margin-top: 25px; font-size: 25px; color: black;";

    roundResultDIVOut.appendChild(roundResultDIV);

    if (
      roundResult === "You win! Rock beats Scissors" ||
      roundResult === "You win! Paper beats Rock" ||
      roundResult === "You win! Scissors beats Paper"
    ) {
      playerScore += 1;
    } else if (
      roundResult === "You lose! Rock beats Scissors" ||
      roundResult === "You lose! Paper beats Rock" ||
      roundResult === "You lose! Scissors beats Paper"
    ) {
      gameScore += 1;
    } else if (
      roundResult === "Invalid Choice!" ||
      roundResult === "It is a tie!"
    ) {
    }

    const resultsDIV1 = document.querySelector("#innerContainer");

    resultsDIV1.textContent =
      "Player Score: " + playerScore + "\n" + "Game Score: " + gameScore;
    resultsDIV1.style.cssText =
      "display: flex; justify-content: center; margin-top: 64px; font-size: 32px; color: blue;";

    const resultsDIV2 = document.querySelector("#innerContainer2");

    if (playerScore == 5) {
      resultsDIV2.textContent =
        "You Won! " + "Final Score is: " + playerScore + " - " + gameScore + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    } else if (gameScore == 5) {
      resultsDIV2.textContent =
        "You Lost, " + "Final Score is: " + gameScore + " - " + playerScore + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    } else if (playerScore == 5 && gameScore == 5) {
      resultsDIV2.textContent = "The game is a tie!" + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    }
  });

  const rpsChoice2 = document.createElement("button");
  rpsChoice2.classList.add("Paper");
  rpsChoice2.textContent = "Paper";

  rpsChoice2.style.cssText =
    "margin: 64px; background-color: violet; color: white; padding: 16px; font-size: 32px; border: white; border-radius: 12px;";

  rpsChoice2.addEventListener("click", () => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);

    const roundResultDIVOut = document.querySelector("#innerContainer1");

    // Remove existing roundResultDIV element if it exists
    const existingRoundResultDIV = document.querySelector("#roundResultDIV");
    if (existingRoundResultDIV) {
      existingRoundResultDIV.remove();
    }

    roundResultDIV = document.createElement("div");
    roundResultDIV.id = "roundResultDIV";
    roundResultDIV.textContent = roundResult;
    roundResultDIV.style.cssText =
      "display: flex; justify-content: center; margin-top: 25px; font-size: 25px; color: black;";

    roundResultDIVOut.appendChild(roundResultDIV);

    if (
      roundResult === "You win! Rock beats Scissors" ||
      roundResult === "You win! Paper beats Rock" ||
      roundResult === "You win! Scissors beats Paper"
    ) {
      playerScore += 1;
    } else if (
      roundResult === "You lose! Rock beats Scissors" ||
      roundResult === "You lose! Paper beats Rock" ||
      roundResult === "You lose! Scissors beats Paper"
    ) {
      gameScore += 1;
    } else if (
      roundResult === "Invalid Choice!" ||
      roundResult === "It is a tie!"
    ) {
    }

    const resultsDIV1 = document.querySelector("#innerContainer");

    resultsDIV1.textContent =
      "Player Score: " + playerScore + "\n" + "Game Score: " + gameScore;
    resultsDIV1.style.cssText =
      "display: flex; justify-content: center; margin-top: 64px; font-size: 32px; color: blue;";

    const resultsDIV2 = document.querySelector("#innerContainer2");

    if (playerScore == 5) {
      resultsDIV2.textContent =
        "You Won! " + "Final Score is: " + playerScore + " - " + gameScore + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    } else if (gameScore == 5) {
      resultsDIV2.textContent =
        "You Lost, " + "Final Score is: " + gameScore + " - " + playerScore + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    } else if (playerScore == 5 && gameScore == 5) {
      resultsDIV2.textContent = "The game is a tie!" + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    }
  });

  const rpsChoice3 = document.createElement("button");
  rpsChoice3.classList.add("Scissors");
  rpsChoice3.textContent = "Scissors";

  rpsChoice3.style.cssText =
    "margin: 64px; background-color: violet; color: white; padding: 16px; font-size: 32px;border: white; border-radius: 12px;";

  rpsChoice3.addEventListener("click", () => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    let roundResult = playRound(playerSelection, computerSelection);

    const roundResultDIVOut = document.querySelector("#innerContainer1");

    // Remove existing roundResultDIV element if it exists
    const existingRoundResultDIV = document.querySelector("#roundResultDIV");
    if (existingRoundResultDIV) {
      existingRoundResultDIV.remove();
    }

    roundResultDIV = document.createElement("div");
    roundResultDIV.id = "roundResultDIV";
    roundResultDIV.textContent = roundResult;
    roundResultDIV.style.cssText =
      "display: flex; justify-content: center; margin-top: 25px; font-size: 25px; color: black;";

    roundResultDIVOut.appendChild(roundResultDIV);

    if (
      roundResult === "You win! Rock beats Scissors" ||
      roundResult === "You win! Paper beats Rock" ||
      roundResult === "You win! Scissors beats Paper"
    ) {
      playerScore += 1;
    } else if (
      roundResult === "You lose! Rock beats Scissors" ||
      roundResult === "You lose! Paper beats Rock" ||
      roundResult === "You lose! Scissors beats Paper"
    ) {
      gameScore += 1;
    } else if (
      roundResult === "Invalid Choice!" ||
      roundResult === "It is a tie!"
    ) {
    }

    const resultsDIV1 = document.querySelector("#innerContainer");

    resultsDIV1.textContent =
      "Player Score: " + playerScore + "\n" + "Game Score: " + gameScore;
    resultsDIV1.style.cssText =
      "display: flex; justify-content: center; margin-top: 64px; font-size: 32px; color: blue;";

    const resultsDIV2 = document.querySelector("#innerContainer2");

    if (playerScore == 5) {
      resultsDIV2.textContent =
        "You Won! " + "Final Score is: " + playerScore + " - " + gameScore + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    } else if (gameScore == 5) {
      resultsDIV2.textContent =
        "You Lost, " + "Final Score is: " + gameScore + " - " + playerScore + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    } else if (playerScore == 5 && gameScore == 5) {
      resultsDIV2.textContent = "The game is a tie!" + ". " + "Please refresh the page to play again.";
      resultsDIV2.style.cssText =
        "display: flex; justify-content: center; margin-top: 64px; font-size: 25px; color: black;";
    }
  });

  container.appendChild(rpsChoice1);
  container.appendChild(rpsChoice2);
  container.appendChild(rpsChoice3);
}

game();
