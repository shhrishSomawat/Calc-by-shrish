let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".rstbtn");
let newgamebtn = document.querySelector("#newgame")
let msgcontainer = document.querySelector(".msg-box")
let msg = document.querySelector("#msg")

let turn_O = true; //playerX,playerO
let moveCount = 0;

winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () =>{
  turn_O=true;
  moveCount = 0;
  enableBoxes();
  msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") { // Check if the box is not already clicked
      if (turn_O) {
        box.innerText = "O";
        turn_O = false;
      } else {
        box.innerText = "X";
        turn_O = true;
      }
      box.disabled = true;
      moveCount++;
      winnerCheck();
      if (moveCount === 9 && !winnerCheck()) {
        // If all 9 moves are made and there's no winner, it's a draw
        showDraw();
      }
    }
  });
});

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const showDraw = () => {
  msg.innerText = "It's a draw!";
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const winnerCheck = () => {
  for (let pattern of winningPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return true; // Return true if there is a winner
      }
    }
  }
  return false; // Return false if no winner is found
};

newgamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);