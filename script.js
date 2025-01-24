let user_rock = document.querySelector(".user-rock");
let user_paper = document.querySelector(".user-paper");
let user_scissors = document.querySelector(".user-scissors");

let computer_rock_image = document.querySelector(".computer-rock img");
let computer_paper_image = document.querySelector(".computer-paper img");
let computer_scissors_image = document.querySelector(".computer-scissors img");

let userScore = 0;
let userScore_container = document.querySelector(".user-score");
let computerScore = 0;
let computerScore_container = document.querySelector(".computer-score");

let round = document.querySelector(".round-number");

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateScore() {
    userScore_container.textContent = "User: " + userScore;
    computerScore_container.textContent = "Computer: " + computerScore;
}

function resetComputerChoice(){
    computer_rock_image.src = "images/question.png";
    computer_paper_image.src = "images/question.png";
    computer_scissors_image.src = "images/question.png";
}

function getComputerChoice(){
    let randomNumber = Math.random();
    if (randomNumber < 1/3) {
        computer_rock_image.src = "images/rock.png";
        return "Rock";
    }
    else if (randomNumber < 2/3) {
        computer_paper_image.src = "images/paper.png";
        return "Paper";
    }
    else {
        computer_scissors_image.src = "images/scissors.png";
        return "Scissors";
    }
}

function getUserChoice() {
    return new Promise((resolve) => {
        user_rock.addEventListener("click", () => {
            resolve("Rock");
        }, { once: true });
        user_paper.addEventListener("click", () => {
            resolve("Paper");
        }, { once: true });
        user_scissors.addEventListener("click", () => {
            resolve("Scissors");
        }, { once: true });
    });
}

async function playRound(roundNumber){
    round.textContent = "Round: " + roundNumber;

    let userChoice = await getUserChoice();
    let computerChoice = getComputerChoice();

    if(computerChoice == "Rock" && userChoice == "Scissors")
        computerScore++;
    if(computerChoice == "Rock" && userChoice == "Paper")
        userScore++;
    if(computerChoice == "Paper" && userChoice == "Rock")
        computerScore++;
    if(computerChoice == "Paper" && userChoice == "Scissors")
        userScore++;
    if(computerChoice == "Scissors" && userChoice == "Paper")
        computerScore++;
    if(computerChoice == "Scissors" && userChoice == "Rock")
        userScore++;

    updateScore();

    await delay(2000);
}

async function playGame(){
    for (var i = 0; i < 3; i++) {
        resetComputerChoice();
        await playRound(i+1);
    }
    if (userScore < computerScore)
        round.textContent = "The Computer won!";
    else if( userScore == computerScore)
        round.textContent = "It's a 👔!";
    else
        round.textContent = "You won!"
}

playGame();