const { BALL_SIZE } = require("../config");

class Ball {
    constructor(x = 0, y = 0, style = '') {
        this.x = x;
        this.y = y;
        this.style = style;
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        ctx.fillStyle = this.style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, BALL_SIZE, 0, 2 * Math.PI);
        ctx.fill();
        ctx.strokeStyle = 'black'
        ctx.stroke();
    }
}

module.exports = {
    Ball,
};
