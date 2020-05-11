function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "rock":
      if (computerSelection == "rock") {
        console.log("Its a draw");
      } else if (computerSelection == "paper") {
        scoreComputer = scoreComputer + 1;
        console.log("The Computer Won this round");
      } else if (computerSelection == "scissors") {
        scorePlayer = scorePlayer + 1;
        console.log("The Player Won this round");
      }
      break;
    case "paper":
      if (computerSelection == "paper") {
        console.log("Its a draw");
      } else if (computerSelection == "scissors") {
        scoreComputer = scoreComputer + 1;
        console.log("The Computer Won this round");
      } else if (computerSelection == "rock") {
        scorePlayer = scorePlayer + 1;
        console.log("The Player Won this round");
      }
      break;
    case "scissors":
      if (computerSelection == "scissors") {
        console.log("Its a draw");
      } else if (computerSelection == "rock") {
        scoreComputer = scoreComputer + 1;
        console.log("The Computer Won this round");
      } else if (computerSelection == "paper") {
        scorePlayer = scorePlayer + 1;
        console.log("The Player Won this round");
      }
      break;
  }
}

export default playRound;
