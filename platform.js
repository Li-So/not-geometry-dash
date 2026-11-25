export default class Platform {
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

    move(){
        this.xPos -= 1;
    }
}
