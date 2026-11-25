import Character from "./character";
import Platform from "./platform";
import Button from "./button";
import MovingPlatform from "./movingPlatform";

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

let platforms = [
    new Platform(100, 220, 100, 50),
    new MovingPlatform(220, 300, 100, 50),
    new Platform(340, 270, 100, 50),
];

// Make an introductory button
const startButton = new Button(100, 150, 200, 100, "Start");

function draw() {
    background("grey");

    if (currentGameState === gameState.intro) {
        startButton.draw();
    } else if (currentGameState === gameState.active) {
        for (const platform of platforms) {
            platform.draw();

            if (platform.bounce) {
                platform.bounce();
            }
        }

        gameCharacter.draw();

        if (
            gameCharacter.yPos + gameCharacter.height <
            500 //&&
            //!gameCharacter.isColliding(testPlatform)
        ) {
            gameCharacter.fall();
        }
    } else {
        rect(50, 50, 50, 50);
    }
}

function keyPressed() {
    gameCharacter.jump();
}

function mouseClicked() {
    if (currentGameState === gameState.intro && startButton.isHovered()) {
        currentGameState = gameState.active;
    }
}
