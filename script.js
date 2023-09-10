//create playRound function
function playRound(computerChoice, userChoice){

    if (computerChoice == userChoice) {
        return "It's a tie!";
    } else if (computerChoice == "rock" && userChoice == "scissors" ||userChoice == "SCISSORS" || userChoice == "Scissors") {
        return "computerScore";
        
        
    } else if (computerChoice == "paper"  && userChoice == "rock" || userChoice == "ROCK" || userChoice == "Rock") {
        return "computerScore";
        
    } else if (computerChoice == "scissors" && userChoice == "paper" || userChoice == "PAPER" || userChoice =="Paper") {
        return "computerScore";
        
    }
    else if (userChoice == "rock" || userChoice == "ROCK" || userChoice == "Rock" && computerChoice == "scissors" ) {
        return "humanScore";
        
    } else if (userChoice == "paper" || userChoice == "PAPER" || userChoice == "Paper" && computerChoice == "rock" ) {
        return "humanScore";
        
    } else if (userChoice == "scissors" || userChoice == "SCISSORS" || userChoice == "Scissors" && computerChoice == "paper" ) {
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
    let result;
    let humanScore = 0;
    let computerScore = 0;
    let tie = 0;

    //create a loop to run playRound 05 times
    for(let i = 0; i < 5; i++){
        let computerChoice = computerPlay();
        let userChoice = getUserChoice();
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


    //check the score
    if(computerScore > humanScore){
        console.log("You lose! I know AI is a danger! but don't lose your heart.");
    }else if(humanScore > computerScore){
        console.log("Congrats! You beat Computer!");
    }else{
        console.log("Tie!");
    }

    console.log("Score of Computer is", computerScore);
    console.log("Score of Human is", humanScore);
    console.log("Tie is", tie);
    
}

game();