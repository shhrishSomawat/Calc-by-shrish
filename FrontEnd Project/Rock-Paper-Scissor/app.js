let userScore = 0;
let compScore = 0;
//  accesing choices 
const choices = document.querySelectorAll(".choice");
const msgpara = document.querySelector("#msg");
const userscorePARA = document.querySelector("#user-score");
const compscorePARA = document.querySelector("#comp-score");


const generateCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  //rock paper scissors
  const randomIndex = Math.floor(Math.random() * 3); //generate random numbers from 0 to 1 and multiply to 3 so that comes between 0 to 2
  return options[randomIndex];
};

const drawGame = ()=>{
    msgpara.innerText = "Draw!";
    msgpara.style.backgroundColor = "bLUE";
}

const showWinner = (userWin,userChoiceId,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userscorePARA.innerText = userScore;
        msgpara.innerText = `You win! Your ${userChoiceId} beats ${compChoice}`;
        msgpara.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compscorePARA.innerText = compScore;
        msgpara.innerText = `You Lose! computer's ${compChoice} beats Your ${userChoiceId}`;
        msgpara.style.backgroundColor = "red";
    }
}

const playGame = (userChoiceId) => {
  
  //generate computers choice
  const compChoice = generateCompChoice();


  if(userChoiceId === compChoice)
  {
    drawGame();
    //draw game
  }
  else{
    let userWin = true;
    if(userChoiceId === "rock"){
        // scissor
        //paper
        userWin = compChoice === "paper"?false:true;
    }
    else if(userChoiceId === "paper")
    {
        userWin = compChoice === "scissor"?false:true;
    }
    else
    {
        //rock , paper
        userWin = compChoice === "rock"?false:true;
    }

    showWinner(userWin,userChoiceId,compChoice);
  }

};


//add event listener to ecah choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoiceId = choice.getAttribute("id");
    // console.log("choice was clicked", userChoiceId);
    playGame(userChoiceId);
  });
});
