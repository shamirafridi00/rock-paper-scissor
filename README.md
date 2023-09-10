
# Rock Paper Scissors

I made this game as an assignment of "The Odin Project". The assignment was taken from this given below link.
https://www.theodinproject.com/lessons/foundations-rock-paper-scissors


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








