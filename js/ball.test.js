const { Ball } = require('./ball');

describe('Base Ball specs', () => {
    it('should be creatable', () => {
        expect(() => new Ball).not.toThrow();
    });
});
