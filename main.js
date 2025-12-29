document.addEventListener("DOMContentLoaded", () => {
const rock = document.querySelector(".click");
const paper = document.querySelector(".click1");
const scissors = document.querySelector(".click2");
const text = document.getElementById("display");
const userScore = document.getElementById("myScore");
const computerScore = document.getElementById("compScore");
const ties = document.getElementById("draws");
const reStart = document.getElementById("reset");

  let ourDraw = 0;
  let userScoreUpdater = 0;
  let computerScoreUpdater = 0;

const gamePlay = (userChoice) => {
  //computer choice logic
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  //game play win lose conditions
  if(userChoice === computerChoice){
    ties.textContent = `Drawn X ${++ourDraw}`
    text.textContent = `You chose ${userChoice} and computer chose ${computerChoice}, its a Tie`
  }else if(
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
){
    //score updater
  if(userScoreUpdater === 9){
  text.textContent = "User wins overall score!"
  disableBtn();
  popCon();
  return;
}
  userScore.textContent = `User Wins = ${++userScoreUpdater}`
  text.textContent = `You chose ${userChoice} and computer chose ${computerChoice}, You win`
}else{
  //computer score updater
    if(computerScoreUpdater === 9){
  text.textContent = "User loses, computer wins overall score!"
  disableBtn();
  popCon();
  return;
}
  computerScore.textContent = `Computer Wins = ${++computerScoreUpdater}`
  text.textContent = `You chose ${userChoice} and computer chose ${computerChoice}, You Lose!`
}
}

const reset = () => {
  ourDraw = 0;
  userScoreUpdater = 0;
  computerScoreUpdater = 0;
  ties.textContent = " ";
  userScore.textContent = " ";
  computerScore.textContent = "";
  text.textContent = " ";
  buttons.forEach(btn => {
    btn.disabled = false;
  })
}

rock.addEventListener('click', () => gamePlay("rock"));
paper.addEventListener('click', () => gamePlay("paper"));
scissors.addEventListener('click', () => gamePlay("scissors"));
reStart.addEventListener('click', () => reset());

const buttons = [rock, paper, scissors]
const disableBtn = () => {
  buttons.forEach(btn => {
    btn.disabled = true;
  });
}

const popCon = () => {
  confetti({
    particleCount: 350,
    spread: 70,
    origin: { y: 0.6 }
  });
};

});


