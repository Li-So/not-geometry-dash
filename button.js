export default class Button {
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

	isHovered(){
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