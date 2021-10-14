let playerScore = 0;
let computerScore = 0;
let userInput;

function userInputRock() {
    userInput = "rock";
    console.log(game());
}

function userInputPaper() {
    userInput = "paper";
    console.log(game());
}

function userInputScissor() {
    userInput = "scissor";
    console.log(game());
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result;
    switch (true) {
        case playerSelection === computerSelection:
            result = 'Draw';
            break;
        case playerSelection === 'rock' && computerSelection === 'scissor':
            result = 'You Won!, Rock beats Scissor';
            playerScore += 1;
            break;
        case playerSelection === 'scissor' && computerSelection === 'rock':
            result = 'You Lost, Rock beats Scissor';
            computerScore += 1;
            break;
        case playerSelection === 'paper' && computerSelection === 'rock':
            result = 'You Won!, Paper beats Rock';

            playerScore += 1;
            break;
        case playerSelection === 'rock' && computerSelection === 'paper':
            result = 'You Lost, Paper beats Rock';

            computerScore += 1;
            break;
        case playerSelection === 'scissor' && computerSelection === 'paper':
            result = 'You Won!, Scissor beats Paper';
            playerScore += 1;
            break;
        case playerSelection === 'paper' && computerSelection === 'scissor':
            result = 'You Lost, Scissor beats Paper';
            computerScore += 1;
            break;
    }
    document.getElementById('userRoundOutputText').innerHTML = result;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    return (
        [result, playerScore, computerScore]
    )
}

function computerPlay() {
    let rps = ["Rock", "Paper", "Scissor"];
    let randomRps = Math.floor(Math.random() * rps.length);
    return rps[randomRps].toLowerCase();
}

function game() {
    let result;
    console.log(playRound(userInput, computerPlay()));
    if (playerScore === 3 || computerScore === 3) {
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissor').disabled = true;
        document.getElementById('resetButton').style.display = 'block';
        if (playerScore > computerScore) {
            result = 'you win'
            document.getElementById('userRoundOutputText').innerHTML = 'You Win'
        }
        else if (computerScore > playerScore) {
            result = 'you lose';
            document.getElementById('userRoundOutputText').innerHTML = 'You Lose'
        }
    }
    return result;
}

function resetGame() {
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissor').disabled = false;
    document.getElementById('resetButton').style.display = 'none';
    computerScore = 0;
    playerScore = 0;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    document.getElementById('userRoundOutputText').innerHTML = '';
}


