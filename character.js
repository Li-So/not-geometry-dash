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
        this.yPos -= 20;
    }
}
