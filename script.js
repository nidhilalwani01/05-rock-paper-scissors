// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

// Randomly choose Rock, Paper, or Scissors for the computer
function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "Rock";
  } else if (randomNumber < 0.66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Compare both choices and return the round result
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return "You win!";
  }

  if (playerChoice === "Paper" && computerChoice === "Rock") {
    return "You win!";
  }

  if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return "You win!";
  }

  return "Computer wins!";
}

// Play one round: take player's choice, get computer choice, and show both choices
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winnerMessage = getWinner(playerChoice, computerChoice);
  resultDiv.textContent = `You chose: ${playerChoice} | Computer chose: ${computerChoice} | ${winnerMessage}`;
}

// Add event listener for rock button
rockButton.addEventListener("click", function() {
  playRound("Rock");
});

// Add event listener for paper button
paperButton.addEventListener("click", function() {
  playRound("Paper");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function() {
  playRound("Scissors");
});