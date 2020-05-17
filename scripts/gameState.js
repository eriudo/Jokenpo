// game-state.js
import hompepage from "./HomePage.js";
import selectMovePage from "./SelectMovePage.js";
import resultPage from "./ResultPage.js";
import winPage from "./WinPage.js";

let currentState;

const gameState = {
  onStateChange(e) {
    if (currentState) {
      currentState.stop();
    }

    const newState = e.detail;

    switch (newState) {
      case "start screen":
        currentState = hompepage;
        break;
      case "start done":
        currentState = selectMovePage;
        break;
      case "result screen":
        currentState = resultPage;
        break;
      case "end screen":
        currentState = winPage;
        break;
      default:
        throw new Error("Estado inválido");
    }

    currentState.start(gameState.changeState);
  },
};

document.addEventListener("changeState", gameState.onStateChange);
export default gameState;
// index
