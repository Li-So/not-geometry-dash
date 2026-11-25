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
        rect(this.x, this.y, this.w, this.h);
        text(
            this.text,
            this.w + this.x - Math.abs(this.w - this.x),
            this.y + this.h - Math.abs(this.h - this.y),
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
