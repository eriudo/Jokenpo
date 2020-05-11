// Your JavaScript goes here!
import start from "./start.js";
import playRound from "./playRound.js";
import computerPlay from "./computerPlay.js";

let scorePlayer, scoreComputer;
scorePlayer = 0;
scoreComputer = 0;

let btnStart = document.querySelector("#btn_start");
btnStart.addEventListener("click", () => {
  start();
});
