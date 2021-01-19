const { TABLE_WIDTH, TABLE_HEIGHT } = require("../config");

class Table {
    constructor(x = 0, y = 0) {
        this.balls = [];
        this.x = x;
        this.y = y;
    }

    addBall(ball) {
        ball.x = ball.x + this.x;
        ball.y = ball.y + this.y;
        this.balls.push(ball);
        ball.draw(this.ctx);
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        this.ctx = ctx;
        ctx.fillStyle = 'green';
        ctx.fillRect(
            this.x,
            this.y,
            TABLE_WIDTH,
            TABLE_HEIGHT
        );
    }
}

module.exports = {
    Table,
};
