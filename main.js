import Character from "./character";
import Platform from "./platform";

function setup() {
    createCanvas(500, 500);
}

const gameState = {
    win: "gameWon",
    start: "startScreen",
    active: "gameActive",
};

let currentGameState = gameState.start;
const gameCharacter = new Character(100, 300, 100, 100);

const testPlatform = new Platform(100, 100, 100, 50);

function draw() {
    background("grey");

    if (currentGameState === gameState.start) {
        rect(100, 100, 200, 100);
    } else if (currentGameState === gameState.active) {
        gameCharacter.draw();
        testPlatform.draw();

        if (gameCharacter.yPos + gameCharacter.height < 500) {
            gameCharacter.fall();
        }
    } else {
        rect(50, 50, 50, 50);
    }
}

function keyPressed() {
    gameCharacter.jump();
}

function mouseClicked(){
	if(currentGameState === gameState.start &&
		mouseX < 300 && 
		mouseX > 100 &&
		 mouseY < 200 &&
		  mouseY > 100){
		currentGameState = gameState.active;
	}
}
