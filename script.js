const choices = ["rock", "paper", "scissors"];
let gameStats = { wins: 0, losses: 0, ties: 0 };

document.getElementById("rock").addEventListener("click", () => {
  playGame("rock");
});

document.getElementById("paper").addEventListener("click", () => {
  playGame("paper");
});

document.getElementById("scissors").addEventListener("click", () => {
  playGame("scissors");
});


function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = compareChoices(playerChoice, computerChoice);
  
  displayMessage(result);

  updateGameStats();

//   console.log(`Player Choice: ${playerChoice}`);
//   console.log(`Computer Choice: ${computerChoice}`);
}

function compareChoices(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameStats.ties++;
    return "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    gameStats.wins++;
    return "You win!";
  } else {
    gameStats.losses++;
    return "You lose!";
  }
}

function updateGameStats() {
  const statsElement = document.getElementById("game-stats");
  statsElement.textContent = `Wins: ${gameStats.wins}, Losses: ${gameStats.losses}, Ties: ${gameStats.ties}`;
}

function displayMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
}
