const container = document.querySelector("#container");
const computer = document.querySelector("#computer");
const human = document.querySelector("#human");

function addImageElement() {
    let images = ['rock', 'paper', 'scissor']
    for (let player of [computer, human]) {
        for (let image of images) {
            let img = document.createElement('img');
            img.src =  "images/" + image + ".png"
            img.alt = image + " pic";
            player.appendChild(img);
        }
    }
}