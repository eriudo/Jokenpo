import playRound from "./playRound.js";
import computerPlay from "./computerPlay.js";
function rockSelect() {
  playRound("rock", computerPlay());
  document.dispatchEvent(
    new CustomEvent("changeState", { detail: "result screen" })
  );
}
function paperSelect() {
  playRound("paper", computerPlay());
  document.dispatchEvent(
    new CustomEvent("changeState", { detail: "result screen" })
  );
}
function scissorsSelect() {
  playRound("scissors", computerPlay());
  document.dispatchEvent(
    new CustomEvent("changeState", { detail: "result screen" })
  );
}
const displayMovePage = document.querySelector(".SelectMovePage");
let btnRock = document.querySelector("#btn_choice_rock");
let btnPaper = document.querySelector("#btn_choice_paper");
let btnScissors = document.querySelector("#btn_choice_scissors");
const selectMovePage = {
  start() {
    //document.body.innerText = "Agora vc está no jogo!!";
    displayMovePage.style = "display: flex;";
    btnRock.addEventListener("click", rockSelect);
    btnPaper.addEventListener("click", paperSelect);
    btnScissors.addEventListener("click", scissorsSelect);
  },
  stop() {
    const displayMovePage = document.querySelector(".SelectMovePage");
    displayMovePage.style = "display: none;";
    btnRock.removeEventListener("click", rockSelect);
    btnPaper.removeEventListener("click", paperSelect);
    btnScissors.removeEventListener("click", scissorsSelect);
  },
};

export default selectMovePage;
