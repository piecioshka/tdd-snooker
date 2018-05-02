class Board {

    renderCanvas() {
        const $canvas = document.createElement('canvas');
        $canvas.width = 400;
        $canvas.height = 200;
        document.body.appendChild($canvas);
        this.$el = $canvas;
    }

    removeCanvas() {
        this.$el.parentNode.removeChild(this.$el);
    }
}

module.exports = {
    Board
};
