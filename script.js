// Get all the choice elements
const choices = document.querySelectorAll(".choice");
// Get the message element
const msg = document.querySelector("#msg");
// Get the score elements
const userScoreElem = document.querySelector("#user-score");
const computerScoreElem = document.querySelector("#comp-score");

// Initialize scores
let userScore = 0;
let computerScore = 0;

// Function to handle a draw game(4)
const drawGame = () => {
    console.log("drawing game");
    msg.innerText = "Draw";
}

// Function to generate a random choice for the computer (2)
const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * options.length);
    return options[index];
}

// Function to show the winner(5)
const showWinner = (userWin) => {
    if (userWin) {
        console.log("user wins");
        msg.innerText = "You win";
        userScore++;
    } else {
        console.log("computer wins");
        msg.innerText = "Computer wins";
        computerScore++;
    }
    // Update the scores
    userScoreElem.innerText = userScore;
    computerScoreElem.innerText = computerScore;
}

// Function to play the game (3)
const playGame = (userChoice) => {
    
    console.log(`User: ${userChoice}`);
    const computerChoice = generateComputerChoice();
    console.log(`Computer: ${computerChoice}`);

    if (userChoice === computerChoice) {
        // Draw game
        drawGame(); //(4)
    } else {
        // Determine the winner
        let userWin;   //(5)
        switch (userChoice) {
            case "rock":
                userWin = (computerChoice === "scissors");
                break;
            case "paper":
                userWin = (computerChoice === "rock");
                break;
            case "scissors":
                userWin = (computerChoice === "paper");
                break;
        }
        showWinner(userWin);
    }
}

// Add event listeners to each choice element (1)
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
