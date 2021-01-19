const { Table } = require('./table');
const { Ball } = require('./ball');

describe('Base Table specs', () => {
    it('should be creatable', () => {
        expect(() => new Table()).not.toThrow();
    });

    it('should has contain empty list of balls at start', () => {
        // Given & When
        const t = new Table();

        // Then
        expect(t.balls.length).toEqual(0);
    });

    it('should has contain one ball after add one ball', () => {
        // Given
        const t = new Table();
        t.draw(new CanvasRenderingContext2D)

        // When
        t.addBall(new Ball());

        // Then
        expect(t.balls.length).toEqual(1);
    });
});
