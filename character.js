export default class Character {
    xPos;
    yPos;
    width;
    height;

    constructor(x, y, width, height) {
        this.xPos = x;
        this.yPos = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        rect(this.xPos, this.yPos, this.width, this.height);
    }

    jump() {
        this.yPos -= 100;
    }

    fall() {
        this.yPos += 20;
    }

    // Moved from platforms since we care more about the character and it's collision
    // 5 set as arbitrary value, receiving objects since we'll input platforms
    isColliding(object) {
        if (
            Math.abs(this.yPos + this.height - object.yPos) < 5 &&
            this.xPos + this.width >= object.xPos &&
            this.xPos <= object.xPos + object.width
        ) {
            return true;
        }
        return false;
    }
}
