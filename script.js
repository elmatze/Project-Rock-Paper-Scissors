
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let playerSelectionUsable;

//  Together with Alternative (l.117)
const computersPlay = ["Rock", "Paper", "Scissors"]

game()

function changeInput(playerSelection) {
    const playerSelectionUsable = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    return playerSelectionUsable;
}




function game() {

    while (playerScore < 5 && computerScore < 5) {

        if (confirm("Do you want to play (again)?")) {
            console.log("New Round!")
        }
        else {
            console.log("Too bad you are trapped! Play until the game is over, noob.")
        }

        playerSelection = prompt("Choose between 'Rock', 'Paper', 'Scissors'", "Rock, Paper, Scissors");
        changeInput(playerSelection)

        playerSelectionUsable = changeInput(playerSelection);
        

        

    const computerSelection = getComputerChoice();



    console.log(`That was your choice: ${changeInput(playerSelection)}`);

    console.log(`That was the Computer's choice: ${computerSelection}`);
    console.log(playRound(playerSelectionUsable, computerSelection));

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


function playRound(playerSelectionusable, computerSelection) {
    if (playerSelectionUsable == computerSelection) {
        return `You both have selected ${playerSelectionUsable}, that's a tie. Play again!`
    }
    
    else if (playerSelectionusable == "Rock" && computerSelection == "Paper") {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelectionUsable}.`
    }

    else if (playerSelectionUsable == "Paper" && computerSelection == "Scissors") {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelectionUsable}.`
    }

    else if (playerSelectionUsable == "Scissors" && computerSelection == "Rock") {
        computerScore++;
        return `You lost! ${computerSelection} beats ${playerSelectionUsable}.`
    }


    else if (playerSelectionUsable == "Rock" && computerSelection == "Scissors") {
        playerScore++;
        return `You won! ${playerSelectionUsable} beats ${computerSelection}.`
    }

    else if (playerSelectionUsable == "Paper" && computerSelection == "Rock") {
        playerScore++;
        return `You won! ${playerSelectionUsable} beats ${computerSelection}.`
    }

    else if (playerSelectionUsable == "Scissors" && computerSelection == "Paper") {
        playerScore++;
        return `You won! ${playerSelectionUsable} beats ${computerSelection}.`
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
