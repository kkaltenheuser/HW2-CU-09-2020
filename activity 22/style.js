// create a counter, running 10 rounds of "RPS"
// create function and variables
// starting data & variables
var wins="0"
var losses="0"
var ties="0" 
 
for (let i = 0; index < 5; i++) {


var userChoice = prompt("Welcome to this game of Rock, Paper, and Scissors. \n Pick rock (r), paper (p), or scissors (s)")
console.log("User Choice",userChoice);

var options = ["r", "p", "s"]

var randomIndex = Math.floor(Math.random() * options.length);

var computerChoice = options[randomIndex]

if (computerChoice === "s" && userChoice === "r") {
    // tell the user that they won
    alert("You Won!")
    win++; // increments of one
    // win += 1 (can change the numeral so that there are higher jumps in scoe)
} // add 1 to their win count

else if (computerChoice === "p" && userChoice = "r") {
    alert("You Lost!")
    losses++;
}

else if (computerChoice === "r" && userChoice = "s") {
    alert("You Lost!")
    losses++;
}

else if (computerChoice === "p" && userChoice = "s") {
    alert("You Won!")
    win++;
}

else if (computerChoice === "r" && userChoice = "p") {
    alert("You Won!")
    win++;
}

else if (computerChoice === "s" && userChoice = "p") {
    alert("You Lost!")
    losses++;
}

else if (computerChoice === userChoice) {
    alert("You Tied!")
    ties++;
}


// create an opening prompt that appears when the user enters the site
// ask the user to choose rock, paper, or scissors by typing "r", "p", or "s" into the prompt box

//randomize computer choices by thirds (".34", ".67", "1") to allow for random selection of "r", "p", or "s"
//generate six variables, three relating to user and their selected option and three relating to the computer and it's random selection
// if, if else, else
// note "if" they are the same, note "if else" they are different but do not destroy one or the other, note "else" if one destroys one or the other resulting in a winning/losing condition that is logged in the console.log

// choose winning conditions for rock w/ an alert
// if rock and rock, if rock and paper, if rock and scissor
// choose winning conditions for paper w/ an alert
// if paper and rock, if paper and paper, if paper and scissor
// choose winning conditions for scissor w/ an alert
// if scissor and rock, if scissor and paper, if scissor and scissor
// console.log user choice, computer choice

// compare choices
// computer alerts decision made based off of if the answers were the same (tie), different (win and/or loss)

// repeat until counter hits "10" and display alert of console.log of choice comparison

count = 1;
count = count + 1;

var decision = function ()
    if (count === 1)
        if (count === 1 + 1)
        
            console.log("you played" + count + "times")

    
    // loop
    const element = array[index];
    
}



// how to print out every single student in a specific array

for (var i = 0; i < studentsRow1.lenght; i++) {

    console.log(studentsRow1[i])
}

// how to print out letter specific names within a specific array that is within a group of arrays

for (var j = 0; j < studentsRow2.length; j++) {
    // get the current student
    var currentStudent = studentsRow2[j];
    // does the current student's name begin with J?
    if (currentStudent[0] === "J") {
        // yes? output their name
        console.log(currentStudent)
    }
}

// using the entire class Array to select the second student in row 3?
console.log (enterClass[2][1]) // [2] because we count up from 0 and [1] because we count from 0