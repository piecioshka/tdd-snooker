const { BOARD_WIDTH, BOARD_HEIGHT } = require("../config");

class Board {
    constructor() {
        this._table = null;
    }

    renderCanvas() {
        const $canvas = document.createElement("canvas");
        $canvas.width = BOARD_WIDTH;
        $canvas.height = BOARD_HEIGHT;
        document.body.appendChild($canvas);
        this.$el = $canvas;

        this.draw(this.ctx);
    }

    removeCanvas() {
        this.$el.parentNode.removeChild(this.$el);
    }

    get ctx() {
        return this.$el.getContext("2d");
    }

    setTable(table) {
        this._table = table;
        table.draw(this.ctx);
    }

    get table() {
        return this._table;
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
    }
}

module.exports = {
    Board,
};
