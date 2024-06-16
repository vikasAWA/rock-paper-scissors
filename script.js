// A function to get computer choice.
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()* 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissor"
    }
}

// A function to take human choice.
function getHumanChoice() {
    return prompt("Rock or Paper or Scissor. Choose: ").toLowerCase()
}


// A function to run entire game.
function playGame() {
    let humanScore, computerScore ;
    humanScore = 0;
    computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let roundWinner;
        
        if (humanChoice === 'rock' && computerChoice === 'paper') {
            roundWinner = 'computer';
        } else if (humanChoice === 'rock' && computerChoice=== 'scissor') {
            roundWinner = 'human';
        } else if (humanChoice === 'paper' && computerChoice === 'rock') {
            roundWinner = 'human';
        } else if (humanChoice === 'paper' && computerChoice === 'scissor') {
            roundWinner = 'computer';
        } else if (humanChoice === 'scissor' && computerChoice === 'rock') {
            roundWinner = 'computer';
        } else if (humanChoice === 'scissor' && computerChoice === 'paper') {
            roundWinner = 'human';
        } else if (humanChoice === computerChoice) {
            roundWinner = 'tie';
        }
    
        if (roundWinner === 'human') {
            humanScore += 1;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (roundWinner == 'computer') {
            computerScore += 1;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else if (roundWinner === 'tie') {
            console.log("It's a tie.");
        } else {
            console.log("Error");
        }
    }

    
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }

    
    console.log(`Human Score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You won!")
    } else if (humanScore < computerScore) {
        console.log('You lose!')
    } else {
        console.log("This Game is tie.")
    }
}

playGame()