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
    let userChoice = prompt("Welcome to Rock, Paper, Scissors Game! If you are ready then Just Type Rock, Paper, or Scissors! and Hit OK");
    return userChoice;
}

// create game function

function game(){
    let computerChoice = computerPlay();
    let userChoice = getUserChoice();
    let result;
    let humanScore = 0;
    let computerScore = 0;
    let tie = 0;

    //create a loop to run playRound 05 times
    for(let i = 0; i < 5; i++){
        result = (playRound(computerChoice, userChoice));

        // recieve return and update score accordingly

        if (result == "computerScore") {
            computerScore++;
        }else if (result == "humanScore") {
            humanScore++;
        }
        else if (result == "It's a tie!") {
            tie++;
        }else{
            console.log("Invalid Input");
        }
    }

    if(computerScore > humanScore){
        console.log("I know AI is a danger!");
    }else if(humanScore > computerScore){
        console.log("Congrats! You beat Computer!");
    }else{
        console.log("Tie!");
    }
    
}

game();