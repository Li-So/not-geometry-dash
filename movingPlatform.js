import Platform from "./platform";

export default class MovingPlatform extends Platform {
	direction = 1;
    constructor(x, y, width, height) {
        super(x, y, width, height);
    }

    bounce() {
        this.yPos += this.direction;
        if (this.yPos < 100 || this.yPos > 400) {
            this.direction *= -1;
        }
    }
}
