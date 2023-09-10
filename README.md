# rock-paper-scissor
house rules:
rocks beats scissors

scissors beats paper

paper beats rock



Human vs Computer
Need two inputs . 1) Computer input 2)User input

1) Computer input will be taken from randomFunction()
2) User input will be taken from User using prompt()

write a function that takes both inputs and gives output who is the winner: ComputerInput(),UserInput()

In deciderFunctin which we will call playfunction() we call Computer Input as CI and UserInput as UI for our ease in planning

if CI has a rock and UI has scissors
then gives output as CI wins 

if CI has a scissors and UI has a paper
then gives output as CI wins

if CI has a paper and UI has a rock
then gives output as CI wins


if UI has a rock and CI has scissors
then gives output as UI wins

if UI has a scissors and CI has a paper
then gives output as UI wins

if UI has a paper and CI has a rock
then gives output as UI wins

if both have same choices
it's a tie

if there is other input
return it as invalid input




Write a game() which will do the following things:


create a random function for computer choice
create a function for user input
create a for loop to run playRound() 05 times
receive each return value from playRound
add up the score using if & else depending upon the return value
if return value equals humanScore then add up human score 
if return value equals computerScore then add up computer score
check who makes higher score
give congragulations to human
in case of loss, give sympathies









