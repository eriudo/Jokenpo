// Your JavaScript goes here!
import gameState from "./gameState.js";

const displayMovePage = document.querySelector(".SelectMovePage");
displayMovePage.style = "display: none;";
const displayResultPage = document.querySelector(".ResultPage");
displayResultPage.style = "display: none;";
const displayWinPage = document.querySelector(".WinPage");
displayWinPage.style = "display: none;";

document.dispatchEvent(
  new CustomEvent("changeState", { detail: "start screen" })
);
