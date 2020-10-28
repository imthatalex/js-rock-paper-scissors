let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    if (playerSelection === "rock" && computerSelection === "rock") {
        result = "Draw!";
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        result = "Draw!";
    }
    else if (playerSelection === "scissor" && computerSelection === "scissor") {
        result = "Draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        result = "You Win! Rock beats Scissor!";
        playerScore += 1;
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        result = "You Lose! Rock beats Scissor!";
        computerScore += 1;
    }
    else if (playerSelection ==="paper" && computerSelection === "rock") {
        result = "You Win! Paper beats Rock!";
        playerScore += 1;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        result = "You Lose! Paper beats Rock!";
        computerScore += 1;
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        result = "You Win! Scissor beats Paper!";
        playerScore += 1;
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        result = "You Lose! Scissor beats Paper!";
        computerScore += 1;
    }
    alert(result);
    return result;
}



function computerPlay() {
    let rps = ["Rock", "Paper", "Scissor"];
    let randomRps = Math.floor(Math.random() * rps.length);
    return rps[randomRps].toLowerCase();
}



function game() {
    let result;
   for (let i = 0; i < 5; i++) {
       let userInput = prompt('Rock, Paper or Scissor?')
       playRound(userInput,computerPlay());
       if (playerScore === 3) { break; }
       if (computerScore === 3) { break; }
   }
   if (playerScore > computerScore) {
       result = 'you win'
   }
   else if (computerScore > playerScore){
       result = 'you lose';
   }
   else if (playerScore === computerScore) {
       result = 'Tie';
   }
   alert(result);
}


console.log(game());
