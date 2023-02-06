const pScore = document.querySelector(".player-score");
const compScore = document.querySelector(".ai-score");
const playerMove = document.querySelector(".player-move");
const aiMove = document.querySelector(".ai-move");
const choiceContainer = document.querySelector(".button-container");
const model = document.querySelector(".model");
const header = document.querySelector(".header");
const message = document.querySelector(".message");
const modelMsg = document.querySelector(".model-msg");
const btn = document.querySelector(".btn-try-again");
const reset = document.querySelector(".reset");
const close = document.querySelector(".close");
const moves = ["rock", "paper", "scissors"];

const randomAi = function () {
  const random = Math.floor(Math.random() * moves.length);
  return moves[random];
};

// const player = "rock";
let aiScore = 0;
let playerScore = 0;
function playRound() {
  let tie;
  let win = "You win the round!";
  let lose = "You lose the round!";
  const ai = randomAi();
  const player = move;
  playerMove.innerText = player[0].toUpperCase();
  aiMove.innerText = ai[0].toUpperCase();
  if (ai === player) {
    tie = "It's a tie";
    return tie;
  }

  if (ai === "rock") {
    if (player === "scissors") {
      aiScore++;

      return lose;
    } else {
      playerScore++;

      return win;
    }
  }
  if (ai === "paper") {
    if (player === "rock") {
      aiScore++;

      return lose;
    } else {
      playerScore++;

      return win;
    }
  }
  if (ai === "scissors") {
    if (player === "paper") {
      aiScore++;

      return lose;
    } else {
      playerScore++;

      return win;
    }
  }
}
let move;

close.addEventListener("click", () => {
  model.classList.remove("show-try-again");
  header.classList.remove("blur");
});
reset.addEventListener("click", () => {
  if (message.innerText != "Lets Play") {
    compScore.innerText = "0";
    pScore.innerText = "0";
    aiMove.innerText = "?";
    playerMove.innerText = "?";
    message.innerText = "Restarted";
    playerScore = 0;
    aiScore = 0;
  }
});
choiceContainer.addEventListener("click", function (e) {
  const choice = e.target.closest(".btn");
  let winner;
  if (!choice) return;
  move = choice.getAttribute("id");
  if (playerScore !== 5 && aiScore !== 5) game(move);
});

function game(move) {
  message.innerText = playRound(move);
  pScore.innerText = playerScore;
  compScore.innerText = aiScore;
  compScore.style.color = "orangered";

  if (playerScore == 5 || aiScore == 5) {
    if (playerScore > aiScore) {
      winner = `YOU WIN!! ${playerScore} TO ${aiScore}`;
    } else {
      winner = `COMPUTER WINS :( ${aiScore} TO ${playerScore}`;
    }

    header.classList.add("blur");
    model.classList.add("show-try-again");
    modelMsg.innerText = winner;
    // modelMsg.innerText = winner;
  }
}
console.log(playerScore, aiScore);

btn.addEventListener("click", function (e) {
  model.classList.remove("show-try-again");
  header.classList.remove("blur");

  compScore.innerText = "0";
  pScore.innerText = "0";
  playerMove.innerText = "?";
  aiMove.innerText = "?";
  message.innerText = "Lets Play";
  pScore.style.color = "white";
  compScore.style.color = "white";

  playerScore = 0;
  aiScore = 0;
});

// Yes i understand now bro thank you
// I will finish the project now okay
// console.log(playerScore, aiScore);
