

/*
    Start reading and understanding the logic of the code from game() then goes upward to downward direction.
*/



// This functions recevis the user choice from button input and computer choice with random number
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


//computer random choice for rock, paper, scissors - random number
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


// creating global variables for score
let computerScore = 0;
let humanScore = 0;
let tie = 0;
let counter = 0;



// this functions recieve it's result from game() also it declares displayWinner() and disableButtons()
function scoreCounter(result){
    

    if (result == "computerScore") {
        // Scores are keep adding because the score variabels are global otherwise it would not add more than 1 and would be set to 0 again and again
        computerScore++;
        document.getElementById("computerScore").textContent = computerScore;
      
    }else if (result == "humanScore") {
        humanScore++;
        document.getElementById("humanScore").textContent = humanScore;
        
    }
    else if (result == "It's a tie!") {
        tie++;
        document.getElementById("tie").textContent = tie;
        
    }

    counter++;
    if(counter === 5){
        displayWinner();
        disableButtons();
    }


}


// as the name of the funciton suggests
function displayWinner(){
    if(computerScore > humanScore){
        document.getElementById("dislay").textContent = "You lose! I know AI is a danger! but don't lose your heart.";
    }else if(humanScore > computerScore){
        document.getElementById("dislay").textContent = "Congrats! You beat Computer!";
    }else{
        document.getElementById("dislay").textContent = "You made your game Tie with Computer!";
    }
    
}

// as the name of the function suggests
function disableButtons(){
    const buttons = document.getElementsByClassName("game-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}


// this function resets all the score variables to 0 and it also declare enableButtons()
function reset(){
    computerScore = 0;
    humanScore = 0;
    tie = 0;
    counter = 0;

    document.getElementById("computerScore").textContent = computerScore.toString();
    document.getElementById("humanScore").textContent = humanScore.toString();
    document.getElementById("tie").textContent = tie.toString();

    document.getElementById("dislay").textContent = "................";

    enableButtons();
}



// this function enables all the buttons 
function enableButtons(){
    const buttons = document.getElementsByClassName("game-button");

    for (let i = 0; i < buttons.length; i++){
        buttons[i].disabled = false;
    }
}

// this is the main function

function game(){
    let result;

    // create buttons and their event listeners
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");
    const resetBtn = document.getElementById('reset')


    rockBtn.addEventListener("click", function(){
        result = (playRound(computerPlay(), "rock"));
        scoreCounter(result);
        
    });

    paperBtn.addEventListener("click", function(){
        result = (playRound(computerPlay(), "paper"));
        scoreCounter(result);
    });

    scissorsBtn.addEventListener("click", function(){
        result = (playRound(computerPlay(), "scissors"));
        scoreCounter(result);
    });


    resetBtn.addEventListener("click", function(){
        reset();
    })

    
}

game();