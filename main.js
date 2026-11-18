import Character from "./character";

function setup() {
    createCanvas(500, 500);
}

const gameCharacter = new Character(100, 300, 100, 100);

function draw() {
    background("grey");
    gameCharacter.draw();

    if (gameCharacter.yPos + gameCharacter.height < 500) {
        gameCharacter.fall();
    }
}

function keyPressed() {
    gameCharacter.jump();
}
