import Character from "./character";
import Platform from "./platform";
import Button from "./button";

function setup() {
    createCanvas(500, 500);
}

// Define what states the game has
const gameState = {
    win: "gameWon",
	lose: "gameLose",
    intro: "gameIntro",
    active: "gameActive",
};

//  Track the current gamestate, intro by default
let currentGameState = gameState.intro;

// Make a new character
const gameCharacter = new Character(100, 300, 100, 100);

// Make a test platform
const testPlatform = new Platform(100, 100, 100, 50);

// Make an introductory button
const startButton = new Button(100, 100, 200, 100);

function draw() {
    background("grey");

    if (currentGameState === gameState.intro) {
		startButton.draw();
        
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
	if(currentGameState === gameState.intro &&
		startButton.isHovered()){
		currentGameState = gameState.active;
	}
}
