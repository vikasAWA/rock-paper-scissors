let buttonContainer = document.querySelector(".container")


function getPlayerChoice() {}
    buttonContainer.addEventListener('click', (e) => {
        let output = document.querySelector(".text");
        output.textContent = `You chose ${e.target.id}`;
    })

