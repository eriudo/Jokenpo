import scores from "./scores.js";

function playRound(playerSelection, computerSelection) {
  scores.playerSelect = playerSelection;
  scores.computerSelect = computerSelection;
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        scores.win = "its a draw";
        scores.round = scores.round + 1;
      } else if (computerSelection == "paper") {
        scores.scoreComputer = scores.scoreComputer + 1;
        scores.round = scores.round + 1;
        scores.win = "The Computer Win the round";
      } else if (computerSelection == "scissors") {
        scores.scorePlayer = scores.scorePlayer + 1;
        scores.round = scores.round + 1;
        scores.win = "You Win the round";
      }
      break;
    case "paper":
      if (computerSelection == "paper") {
        scores.win = "its a draw";
        scores.round = scores.round + 1;
      } else if (computerSelection == "scissors") {
        scores.scoreComputer = scores.scoreComputer + 1;
        scores.round = scores.round + 1;
        scores.win = "The Computer Win the round";
      } else if (computerSelection == "rock") {
        scores.scorePlayer = scores.scorePlayer + 1;
        scores.round = scores.round + 1;
        scores.win = "You Win the round";
      }
      break;
    case "scissors":
      if (computerSelection == "scissors") {
        scores.win = "its a draw";
        scores.round = scores.round + 1;
      } else if (computerSelection == "rock") {
        scores.scoreComputer = scores.scoreComputer + 1;
        scores.round = scores.round + 1;
        scores.win = "The Computer Win the round";
      } else if (computerSelection == "paper") {
        scores.scorePlayer = scores.scorePlayer + 1;
        scores.round = scores.round + 1;
        scores.win = "You Win the round";
      }
      break;
  }
}

export default playRound;
