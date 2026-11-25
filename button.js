export default class Button {
    xPos;
    yPos;
    width;
    height;
    text;

    constructor(x, y, width, height, text) {
        this.xPos = x;
        this.yPos = y;
        this.width = width;
        this.height = height;
        this.text = text;
    }

    draw() {
        push();
        textSize(20);
        textAlign(CENTER, CENTER);
        rect(this.xPos, this.yPos, this.width, this.height);
        text(
            this.text,
            this.width + this.xPos - Math.abs(this.width - this.xPos),
            this.yPos + this.height - Math.abs(this.height - this.yPos),
        );
        pop();
    }

    isHovered() {
        if (
            mouseX > this.xPos &&
            mouseX < this.xPos + this.width &&
            mouseY > this.yPos &&
            mouseY < this.yPos + this.height
        ) {
            return true;
        } else {
            return false;
        }
    }
}
