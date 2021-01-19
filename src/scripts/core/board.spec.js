const { Board } = require("./board");

describe("Board / base", () => {
    it("should be creatable", () => {
        expect(() => new Board()).not.toThrow();
    });

    it("should render canvas element", () => {
        // Given
        const b = new Board();

        // When
        b.renderCanvas();

        // Then
        const $canvas = document.querySelector("canvas");
        expect($canvas).not.toBeNull();

        // Teardown
        b.removeCanvas();
    });

    it("should be removed after special function execute", () => {
        // Given
        const b = new Board();
        b.renderCanvas();

        // When
        b.removeCanvas();

        // Then
        const $canvas = document.querySelector("canvas");
        expect($canvas).toBeNull();
    });
});

describe("Board / logic", () => {
    /** @type Board */
    let b = null;

    beforeEach(() => {
        b = new Board();
        b.renderCanvas();
    });

    afterEach(() => {
        b.removeCanvas();
    });

    it("should define table", () => {
        const fakeTable = { draw: () => null };
        b.setTable(fakeTable);
        expect(b.table).toBe(fakeTable);
        expect(() => (b.table = {})).toThrowError();
    });
});
