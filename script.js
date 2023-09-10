//create playRound function
function playRound(computerChoice, userChoice){
    if (computerChoice == userChoice) {
        return "It's a tie!";
    } else if (computerChoice == "rock" || "ROCK" || "Rock" && userChoice == "scissors" || "SCISSORS" || "Scissors") {
        return computerChoice;
    } else if (computerChoice == "paper" || "PAPER" || "Paper" && userChoice == "rock" || "ROCK" || "Rock") {
        return computerChoice;
    } else if (computerChoice == "scissors" || "SCISSORS" || "Scissors" && userChoice == "paper" || "PAPER" || "Paper") {
        return computerChoice;
    }
    else if (userChoice == "rock" || "ROCK" || "Rock" && computerChoice == "scissors" || "SCISSORS" || "Scissors") {
        return userChoice;
    } else if (userChoice == "paper" || "PAPER" || "Paper" && computerChoice == "rock" || "ROCK" || "Rock") {
        return userChoice;
    } else if (userChoice == "scissors" || "SCISSORS" || "Scissors" && computerChoice == "paper" || "PAPER" || "Paper") {
        return userChoice;
    }

     else {
        return "Invalid Input";
    }
}