function getComputerChoice(){
    let randomNumber = Math.random();
    if (randomNumber < 1/3)
        return "Rock";
    else if (randomNumber < 2/3)
        return "Paper";
    else
        return "Scissors";
}

function getUserChoice(roundNumber){
    let answer = prompt("Round " + roundNumber + "! Choose Rock, Paper or Scissors:");
    if(answer != "Rock" && answer != "Paper" && answer != "Scissors"){
        alert("Please enter a valid input");
        answer = getUserChoice(roundNumber);
    }
    return answer;
}

let userScore = 0;
let computerScore = 0;

function playRound(roundNumber){
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice(roundNumber);
    alert("The Computer played " + computerChoice + "!");

    if(computerChoice == "Rock" && userChoice == "Scissors"){
        computerScore++;
        alert("The Computer won this round! Human: " + userScore + " Computer: " + computerScore);
    }
    if(computerChoice == "Rock" && userChoice == "Paper"){
        userScore++;
        alert("You won this round! Human: " + userScore + " Computer: " + computerScore);
    }
    if(computerChoice == "Rock" && userChoice == "Rock"){
        alert("This round is a tie! Human: " + userScore + " Computer: " + computerScore);
    }

    if(computerChoice == "Paper" && userChoice == "Rock"){
        computerScore++;
        alert("The Computer won this round! Human: " + userScore + " Computer: " + computerScore);
    }
    if(computerChoice == "Paper" && userChoice == "Scissors"){
        userScore++;
        alert("You won this round! Human: " + userScore + " Computer: " + computerScore);
    }
    if(computerChoice == "Paper" && userChoice == "Paper"){
        alert("It's a tie! Human: " + userScore + " Computer: " + computerScore);
    }

    if(computerChoice == "Scissors" && userChoice == "Paper"){
        computerScore++;
        alert("The Computer won this round! Human: " + userScore + " Computer: " + computerScore);
    }
    if(computerChoice == "Scissors" && userChoice == "Rock"){
        userScore++;
        alert("You won this round! Human: " + userScore + " Computer: " + computerScore);
    }
    if(computerChoice == "Scissors" && userChoice == "Scissors"){
        alert("It's a tie! Human: " + userScore + " Computer: " + computerScore);
    }
}

function playGame(){
    alert("You are about to play a best out of 3 Rock Paper Scissors game!");
    for (var i = 0; i < 3; i++)
        playRound(i+1);
    if (userScore < computerScore)
        alert("The Computer won!");
    else if( userScore == computerScore)
        alert("It's a tie!");
    else
        alert("You won!");
}

playGame();