import Character from "./character";
import Platform from "./platform";

function setup() {
    createCanvas(500, 500);
}

const gameCharacter = new Character(100, 300, 100, 100);

const testPlatform = new Platform(100, 100, 100, 50);

function draw() {
    background("grey");
    gameCharacter.draw();
	testPlatform.draw();

    if (gameCharacter.yPos + gameCharacter.height < 500) {
        gameCharacter.fall();
    }
}

function keyPressed() {
    gameCharacter.jump();
}
