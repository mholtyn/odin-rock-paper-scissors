/* Rock Paper Scissors */

// TODO: Create function for computer choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    // Returns a random number from 0 to 2
    let randomInt = function() {
        return Math.floor(Math.random() * 3);
    }

    return choices[randomInt()];
}


// TODO: Create function that plays a single round of RPS
function simulateRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" && computerChoice === "Rock") {
        return "Tie"
    }
    else if (playerChoice === "rock" && computerChoice === "Paper") {
        return "You lose! Paper beats Rock"
    }
    else if (playerChoice === "rock" && computerChoice === "Scissors") {
        return "You win! Rock beats Scissors"
    }
    else if (playerChoice === "paper" && computerChoice === "Paper") {
        return "Tie"
    }
    else if (playerChoice === "paper" && computerChoice === "Rock") {
        return "You win! Paper beats Rock"
    }
    else if (playerChoice === "paper" && computerChoice === "Scissors") {
        return "You lose! Scissors beat Paper"
    }
    else if (playerChoice === "scissors" && computerChoice === "Scissors") {
        return "Tie"
    }
    else if (playerChoice === "scissors" && computerChoice === "Rock") {
        return "You lose! Rock beats Scissors"
    }
    else if (playerChoice === "scissors" && computerChoice === "Paper") {
        return "You win! Scissors beat Paper"
    }
    else return "Error. Please try again"
}

const playerChoice = prompt("Enter your choice: ").toLowerCase();
const computerChoice = getComputerChoice();

console.log(simulateRound(playerChoice, computerChoice));



// TODO: Create function that plays one game of RPS (5 rounds)