
// Arbeitsauftrag 28.08.
//      git commit -m "..."
//      .toLowerCase einbauen, um jegliche Eingaben indirekt case-insensitive zu gestalten
//      Dadurch, dass somit sowieso alle Outputs (hier return "...") gleich wären ersetzen wir die ${Variablen} durch die dazugehörigen Strings, wie "Rock"



let playerScore = 0;
let computerScore = 0;

//  Together with Alternative (l.102)
//  const computersPlay = ["Rock", "Paper", "Scissors"]


game()

function game() {

    while (playerScore < 5 && computerScore < 5) {

        if (confirm("Do you want to play (again)?")) {
            console.log("New Round!")
        }
        else {
            console.log("Too bad you are trapped! Play until the game is over, noob.")
        }

    const playerSelection = prompt("Choose between 'Rock', 'Paper', 'Scissors'", "Rock, Paper, Scissors");
    const computerSelection = getComputerChoice();

    console.log(`That was your choice: ${playerSelection}`);
    console.log(`That was the Computer's choice: ${computerSelection}`);
    console.log(playRound(playerSelection, computerSelection));

    console.log(`Computer: ${computerScore} -  You: ${playerScore}`);
    console.log(" ");
    }

    if (computerScore === 5) {
        console.log("Hahaha, you lost!")
    }
    else if (playerScore === 5) {
        console.log("Congratulations, you won!")
    }
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `You both have selected ${playerSelection}, that's a tie. Play again!`
    }
    
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}.`
    }

    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}.`
    }

    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelection}.`
    }


    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}.`
    }

    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}.`
    }

    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        return `You won! ${playerSelection} beats ${computerSelection}.`
    }
}

// function getComputerChoice() {
//     let randomChoice = Math.floor(Math.random() * 3) +1;

//     if (randomChoice === 1) {
//         return "Rock";
//     }

//     else if (randomChoice === 2) {
//         return "Paper";
//     }

//     else {
//         return "Scissors";
//     }
// }

//Alternative getComputerChoice():

 function getComputerChoice() {
     let randomChoice = Math.floor(Math.random() * 3) + 1;

     if (randomChoice === 1) {
     return computersPlay[0];
     }

     if (randomChoice === 2) {
     return computersPlay[1];
     }

     if (randomChoice === 3) {
     return computersPlay[2];
     }
 }
