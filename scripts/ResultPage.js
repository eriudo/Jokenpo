import scores from "./scores.js";

function startDone() {
  document.dispatchEvent(
    new CustomEvent("changeState", { detail: "start screen" })
  );
}
const btnNextRound = document.querySelector("#btn_next_round");
const displayResultPage = document.querySelector(".ResultPage");
const round = document.querySelector("#roundNumber");
const numberOfRound = document.createElement("span");
const movePlayer = document.querySelector("#movePlayer");
const moveComputer = document.querySelector("#moveComputer");
const menuResult = document.querySelector("#buttonsResult");
const resultRound = document.createElement("h1");
const resultPage = {
  start() {
    //document.body.innerText = "sou eu, tela 3";

    displayResultPage.style = "display: flex;";
    numberOfRound.textContent = scores.round;
    movePlayer.textContent = scores.playerSelect;
    moveComputer.textContent = scores.computerSelect;
    resultRound.textContent = scores.win;
    menuResult.appendChild(resultRound);

    round.appendChild(numberOfRound);
    if (scores.scorePlayer === 5) {
      document.dispatchEvent(
        new CustomEvent("changeState", { detail: "end screen" })
      );
    } else if (scores.scoreComputer === 5) {
      document.dispatchEvent(
        new CustomEvent("changeState", { detail: "end screen" })
      );
    }
    btnNextRound.addEventListener("click", startDone);
  },
  stop() {
    const displayResultPage = document.querySelector(".ResultPage");
    displayResultPage.style = "display: none;";
    btnNextRound.removeEventListener("click", startDone);
  },
};
export default resultPage;
