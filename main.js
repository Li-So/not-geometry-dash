let characterX = 100;
let characterY = 100;
const characterW = 100;
const characterH = 100;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background("gray");
    line(0, 400, 500, 400);

    rect(characterX, characterY, characterW, characterH);

    if (characterY + characterH < 400) {
        characterY = characterY + 1;
    }
}
