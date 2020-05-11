import playRound from "./playRound.js";
import computerPlay from "./computerPlay.js";

function start() {
  const container = document.querySelector("#btn_reset");
  const message = document.createElement("div");
  const winner = document.createElement("h2");
  let btnRock = document.querySelector("#btn_choice_rock");
  btnRock.addEventListener("click", () => {
    return playRound("rock", computerPlay());
  });

  let btnPaper = document.querySelector("#btn_choice_paper");
  btnPaper.addEventListener("click", () => {
    return playRound("papper", computerPlay());
  });

  let btnScissors = document.querySelector("#btn_choice_scissors");
  btnScissors.addEventListener("click", () => {
    return playRound("scissors", computerPlay());
  });
  message.textContent = `The score is ${scorePlayer} Player and ${scoreComputer} Computer`;
  container.appendChild(message);
  if (scorePlayer == 5) {
    scorePlayer = 0;
    scoreComputer = 0;
    winner.textContent = "The winner game is the Player";
    container.appendChild(winner);
    return;
  } else if (scoreComputer == 5) {
    scorePlayer = 0;
    scoreComputer = 0;
    winner.textContent = "The winner game is the Computer";
    container.appendChild(winner);
  } else {
    return start(scorePlayer, scoreComputer);
  }
}

export default start;
