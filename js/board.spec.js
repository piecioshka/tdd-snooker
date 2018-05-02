const { Board } = require('./board');

describe('Base Board specs', () => {
    it('should be creatable', () => {
        expect(() => new Board).not.toThrow();
    });

    it('should render canvas element', () => {
        // Given
        const b = new Board();

        // When
        b.renderCanvas();

        // Then
        const $canvas = document.querySelector('canvas');
        expect($canvas).not.toBeNull();

        // Teardown
        b.removeCanvas();
    });

    it('should has size (width, height)', () => {
        // Given
        const b = new Board();

        // When
        b.renderCanvas();

        // Then
        const $canvas = document.querySelector('canvas');
        expect($canvas.width).toEqual(400);
        expect($canvas.height).toEqual(200);

        // Teardown
        b.removeCanvas();
    });

    it('should be removed after special function execute', () => {
        // Given
        const b = new Board();
        b.renderCanvas();

        // When
        b.removeCanvas();

        // Then
        const $canvas = document.querySelector('canvas');
        expect($canvas).toBeNull();
    });
});
