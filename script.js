const container = document.querySelector("#container");
const computer = document.querySelector("#computer");
const human = document.querySelector("#human");
const images = ['rock', 'paper', 'scissor']


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
    let roundResult = document.querySelector(".text");
    switch (humanSelection + computerSelection) {
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            roundResult.textContent = "You lose this round!";
            break;
        case "paperrock":
        case "scissorpaper":
        case "rockscissor":
            roundResult.textContent = "You win this round!";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            roundResult.textContent = "This round is a tie!"
            break;

    }
}

human.addEventListener("click", (e) => {
    let humanChoice = e.target.alt.split(" ")[0];
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
})