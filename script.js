const container = document.querySelector("#container");
const computer = document.querySelector("#computer");
const human = document.querySelector("#human");
const images = ['rock', 'paper', 'scissor']
let humanScore = 0;
let computerScore = 0;


function addImageElement() {
    for (let player of [computer, human]) {
        for (let image of images) {
            let img = document.createElement('img');
            img.src =  "images/" + image + ".png"
            img.alt = image + " pic";
            player.appendChild(img);
        }
    }
}
addImageElement();

function getComputerChoice() {
    return images[Math.floor(Math.random() * 3)]
}


function playRound(humanSelection, computerSelection) {
    let roundResult = document.querySelector(".result");

    switch (humanSelection + computerSelection) {
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            roundResult.textContent = `Computer choice is ${computerSelection}. Your Choice is ${humanSelection}. You lose this round!`;
            computerScore += 1;
            break;
        case "paperrock":
        case "scissorpaper":
        case "rockscissor":
            roundResult.textContent = `Computer choice is ${computerSelection}. Your Choice is ${humanSelection}. You win this round!`;
            humanScore += 1;
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            roundResult.textContent = `Computer choice is ${computerSelection}. Your Choice is ${humanSelection}. it's a tie.!`;
            break;

    }
}

function getWinner() {
    let winner = document.createElement('div');
    winner.classList.add('winner');
    document.body.appendChild(winner);
    winner.setAttribute('style', "color: red; font-size: 100px; text-align: center; margin-top: 300px");
    if (humanScore === 5) {
        winner.textContent = "You are the Winner!.";
        container.remove();
    }
    else if (computerScore === 5) {
        winner.textContent = "Computer is the Winner!";
        container.remove();
    }

}

human.addEventListener("click", (e) => {
    let humanChoice = e.target.alt.split(" ")[0];
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    // Adding highlight feature for human choice
    human.childNodes.forEach(element => {
        if (element === e.target) {
            element.classList.add('highlight');
        }
        else {
            element.classList.remove('highlight');
        }
    });

    // Adding highligh feature for computer choice
    computer.childNodes.forEach(element => {
        if (element.alt.split(" ")[0] === computerChoice) {
            element.classList.add('highlight');
        }
        else {
            element.classList.remove('highlight');
        }
    })
  

    let scoreComputer = document.querySelector('.computerScore');
    let scoreHuman = document.querySelector('.humanScore');
    scoreComputer.textContent = "Computer: " + computerScore;
    scoreHuman.textContent = "Human: " + humanScore;
    getWinner()
})




