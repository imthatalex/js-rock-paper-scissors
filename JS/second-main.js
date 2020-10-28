let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    switch(true) {
        case 'rock, rock':
            result = 'Draw';
            break;
        case 'paper, paper':
            result = 'Draw';
            break;
        case 'scissor, scissor':
            result = 'Draw';
            break;
        case 'rock, scissor':
            result = 'you win, rock beats scissor';
            playerScore += 1;
            break;
        case 'scissor, rock':
            result = 'you lose, rock beats scissor';
            computerScore += 1;
            break;
        case 'paper, rock':
            result = 'you win, paper beats rock';
            playerScore += 1;
            break;
        case 'rock, paper':
            result = 'you lose, paper beats rock';
            computerScore += 1;
            break;
        case 'scissor, paper':
            result = 'you win, scissor beats paper';
            playerScore += 1;
            break;
        case 'paper, scissor':
            result = 'you lose, scissor beats paper';
            computerScore += 1;
            break;
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
        playRound(userInput, computerPlay());
        if (playerScore === 3) { break; }
        if (computerScore === 3) { break; }
    }
    if (playerScore > computerScore) {
        result = 'you win'
    }
    else if (computerScore > playerScore) {
        result = 'you lose';
    }
    else if (playerScore === computerScore) {
        result = 'Tie';
    }
    alert(result);
}


console.log(game());
