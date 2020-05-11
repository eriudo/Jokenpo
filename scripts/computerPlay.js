function computerPlay() {
  let possiblePlays = ["rock", "paper", "scissors"];
  return possiblePlays[Math.floor(Math.random() * 3)];
}

/*function computerPlay() {
  
  
}

function userPlay() {
  let play = prompt();
  return play.toLocaleLowerCase();
}*/

export default computerPlay;
