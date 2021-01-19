require("./index.html");

const { Board } = require("./scripts/core/board");
const { Table } = require("./scripts/core/table");
const { Ball } = require("./scripts/core/ball");

function main() {
    const b = new Board();
    b.renderCanvas();

    const t = new Table(10, 10);
    b.setTable(t);

    t.addBall(new Ball(40, 70, 'white'));

    t.addBall(new Ball(60, 40, 'darkgreen'));
    t.addBall(new Ball(60, 90, 'brown'));
    t.addBall(new Ball(60, 140, 'yellow'));

    t.addBall(new Ball(185, 90, 'blue'));
    t.addBall(new Ball(240, 90, 'pink'));

    t.addBall(new Ball(260, 90, 'red'));

    t.addBall(new Ball(270, 85, 'red'));
    t.addBall(new Ball(270, 95, 'red'));

    t.addBall(new Ball(280, 80, 'red'));
    t.addBall(new Ball(280, 90, 'red'));
    t.addBall(new Ball(280, 100, 'red'));

    t.addBall(new Ball(290, 75, 'red'));
    t.addBall(new Ball(290, 85, 'red'));
    t.addBall(new Ball(290, 95, 'red'));
    t.addBall(new Ball(290, 105, 'red'));

    t.addBall(new Ball(300, 70, 'red'));
    t.addBall(new Ball(300, 80, 'red'));
    t.addBall(new Ball(300, 90, 'red'));
    t.addBall(new Ball(300, 100, 'red'));
    t.addBall(new Ball(300, 110, 'red'));

    t.addBall(new Ball(330, 90, 'black'));
}

window.addEventListener("DOMContentLoaded", main);
