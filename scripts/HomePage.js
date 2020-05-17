import scores from "./scores.js";
const btnStart = document.querySelector("#btn_start");
const showScorePlayer = document.querySelector(".ScorePlayer");
const showScoreComputer = document.querySelector(".ScoreComputer");
const displayhomePage = document.querySelector(".HomePage");

function startDone() {
  document.dispatchEvent(
    new CustomEvent("changeState", { detail: "start done" })
  );
}
const homePage = {
  start() {
    displayhomePage.style = "display: flex;";
    showScorePlayer.textContent = `${scores.scorePlayer}`;
    showScoreComputer.textContent = `${scores.scoreComputer}`;
    btnStart.addEventListener("click", startDone);
  },
  stop() {
    const displayhomePage = document.querySelector(".HomePage");
    displayhomePage.style = "display: none;";
    btnStart.removeEventListener("click", startDone);
  },
};

export default homePage;
