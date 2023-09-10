//create playRound function
function playRound(computerChoice, userChoice){
    if (computerChoice == userChoice) {
        return "It's a tie!";
    } else if (computerChoice == "rock" || "ROCK" || "Rock" && userChoice == "scissors" || "SCISSORS" || "Scissors") {
        return "computerScore";
    } else if (computerChoice == "paper" || "PAPER" || "Paper" && userChoice == "rock" || "ROCK" || "Rock") {
        return "computerScore";
    } else if (computerChoice == "scissors" || "SCISSORS" || "Scissors" && userChoice == "paper" || "PAPER" || "Paper") {
        return "computerScore";
    }
    else if (userChoice == "rock" || "ROCK" || "Rock" && computerChoice == "scissors" || "SCISSORS" || "Scissors") {
        return "humanScore";
    } else if (userChoice == "paper" || "PAPER" || "Paper" && computerChoice == "rock" || "ROCK" || "Rock") {
        return "humanScore";
    } else if (userChoice == "scissors" || "SCISSORS" || "Scissors" && computerChoice == "paper" || "PAPER" || "Paper") {
        return "humanScore";
    }

     else {
        return "Invalid Input";
    }
}


//computer random choice for rock, paper, scissors
function computerPlay(){
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else if (randomNumber == 2) {
        return "scissors";
    }
}

// getUserChoice function
function getUserChoice(){
    let userChoice = prompt("Rock, Paper, or Scissors?");
    return userChoice;
}

// create game function

function game(){
    let computerChoice = computerPlay();
    let userChoice = getUserChoice();
    let result = playRound(computerChoice, userChoice);
    console.log(result);
}