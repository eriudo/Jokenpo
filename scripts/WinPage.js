import scores from "./scores.js";

function startScreen() {
  document.dispatchEvent(
    new CustomEvent("changeState", { detail: "start screen" })
  );
}

const btnBack = document.querySelector("#btn_back");
const congratulationsMessage = document.querySelector(".WinRound");
const winPage = {
  start() {
    //document.body.innerText = "sou eu, tela 3";
    const displayWinPage = document.querySelector("#winPage");
    displayWinPage.style = "display: flex;";
    if (scores.scorePlayer === 5) {
      congratulationsMessage.textContent = "CONGRATULATIONS YOU WINNN";
      scores.scoreComputer = 0;
      scores.scorePlayer = 0;
      scores.round = 0;
      btnBack.addEventListener("click", startScreen);
    } else if (scores.scoreComputer === 5) {
      congratulationsMessage.textContent = "SORRY BUT YOU LOOSE, TRY AGAIN ;)";
      scores.scoreComputer = 0;
      scores.scorePlayer = 0;
      scores.round = 0;
      btnBack.addEventListener("click", startScreen);
    }
  },
  stop() {
    const displayWinPage = document.querySelector("#winPage");
    displayWinPage.style = "display: none;";
    btnBack.removeEventListener("click", startScreen);
  },
};
export default winPage;
