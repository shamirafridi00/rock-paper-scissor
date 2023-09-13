
# Rock Paper Scissors

I made this game as an assignment of "The Odin Project". The assignment was taken from this given below link.
https://shamirafridi00.github.io/rock-paper-scissor/


### House rules:
Rocks beats scissors 

Scissors beats paper

Paper beats rock



The game is between

Human vs Computer


Need two inputs: Computer input & User input

1) Computer input will be taken from randomFunction()
2) User input will be taken from User using prompt()

Write a function that takes both inputs and gives output who is the winner: ComputerInput(),UserInput()

In deciderFunctin which we will call playfunction() we call Computer Input as CI and UserInput as UI for our ease in planning 

#### logic for playfunction() 

1. if CI has a rock and UI has scissors
then gives output as CI wins 

2. if CI has a scissors and UI has a paper
then gives output as CI wins

3. if CI has a paper and UI has a rock
then gives output as CI wins


4. if UI has a rock and CI has scissors
then gives output as UI wins

5. if UI has a scissors and CI has a paper
then gives output as UI wins

6. if UI has a paper and CI has a rock
then gives output as UI wins

7. if both have same choices
it's a tie

8. if there is other input
return it as invalid input



#### logic for game()

Write a game() which will do the following things:


1. create a random function for computer choice and call it in game()

2. create a function for user input choice and call it in game()

3. create a for loop to run playRound() 05 times and call both above functions

4. receive each return value from playRound

5. add up the score using if & else depending upon the return value

6. if return value equals humanScore then add up human score 

7. if return value equals computerScore then add up computer score

8. check who makes higher score

9. give congragulations to human

10. in case of loss, give sympathies



## UI Planning

Buttons > Rock, Paper, Scissors
heading: Score Board
Game Turn: /5
Human Score:
Computer Score:
Tie:

Final Result: Computer win or Human Win or Tie

Reset Button > Play Again?


.....................................

## User Planning

playRound(computerChoice, userChoice) > don't need to change
computerPlay()  > don't need to change
getUserChoice() > dont' need this anymore

game()  > changes will made in this function


Add eventListners on button
computerChoice and userChoice pass to button and get the result
as humanWin or computerWin or tie

result from button will be pass to the newly created function which will be 

updateScore(result)


// Function to update the scoreboard
        function updateScore(result) {
            if (result === 'computerScore') {
                computerScore++;
            } else if (result === 'humanScore') {
                humanScore++;
            } else if (result === "It's a tie!") {
                tie++;
            } else {
                console.log("Invalid Input");
            }

            // Update the displayed scores
            computerScoreDisplay.textContent = computerScore;
            humanScoreDisplay.textContent = humanScore;
            tieDisplay.textContent = tie;


            //display message
             if(computerScore > humanScore){
               ("You lose! I know AI is a danger! but don't lose your heart.");
                    }else if(humanScore > computerScore){
                ("Congrats! You beat Computer!");
                 }else{
                ("Tie!");
                         }
        }



### Code Organization:



let result;
let humanScore = 0;
let computerScore = 0;
let tie = 0;
let counter = 0;
const maxClicks = 5;


btn1.event listener
btn2.event listerne
btn3. event listener
UI variables call


btns pass to the playRound for the result


updateScore()
display the score on the screen.


function handleClick(){
    if counter < maxClicks
        const result = PlayRound()
        updateScore(result)
        counter++
}else{
    endGame();
}


function endGame(){
    alert game end

    reset Game
}


function resetGame(){
    all varaibles set to 0
    and display thm
}




main{
    
}



