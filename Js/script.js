const rock =document.getElementById("rock");
const paper =document.getElementById("paper");
const scissor =document.getElementById("scissor");
const roundInfo =document.getElementById("roundInfo");
const pScore =document.getElementById("pScore");
const cScore =document.getElementById("cScore");
const message =document.getElementById("message");
const resetS =document.getElementById('reset');

rock.addEventListener("click", () => handleClick("rock"));
paper.addEventListener('click',() => handleClick("paper"))
scissor.addEventListener('click',() => handleClick("scissor"))
resetS.addEventListener("click", () => reset());

const array1 = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;
let roundWinner = "";
let playerChoice = "";
function getComputerChoice() {
  return array1[Math.floor(Math.random() * array1.length)];
};

function play(playerChoice, computerChoice) {
if(
    (playerChoice === "rock" && computerChoice === "scissor")||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
){
    playerScore++;
    roundWinner ="You";
}
else if (
  (computerChoice === "rock" && playerChoice === "scissor") ||
  (computerChoice === "paper" && playerChoice === "rock") ||
  (computerChoice === "scissor" && playerChoice === "paper")
) {
  computerScore++;
  roundWinner = "Computer";
}
else{
    roundWinner = "Tie";
}
}

function handleClick(player){
    if(isGameOver()){
        message.textContent="Game over higher scorer wins";
        return;
    }
    else
    playerChoice = player;
    play(playerChoice, getComputerChoice());
    updateRoundInfo();
    return "";
}

function updateRoundInfo(){
    if (roundWinner === "tie") {
      roundInfo.textContent = "It's a tie!";
    } else if (roundWinner === "You") {
      roundInfo.textContent = "You won!";
    } else if (roundWinner === "Computer") {
      roundInfo.textContent = "You lost!";
    }
      pScore.textContent = `${playerScore}`;
      cScore.textContent = `${computerScore}`;
}
function isGameOver() {
  return playerScore === 5 || computerScore === 5;
}

function reset(){
    playerScore = 0;
    computerScore = 0;
    roundInfo.textContent = " ";
    pScore.textContent = 0;
    cScore.textContent = 0;
}