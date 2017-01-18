/**
 * Created by qhyang on 2017/1/13.
 */
import Game from "./scripts/game/Game";
import render from "./scripts/render/render";
import engine from "./scripts/physics/engine";
import mouse from "./scripts/physics/mouseConstraint";
import board from "./scripts/physics/board";
import Setup from "./scripts/game/Setup";

let game = new Game({
    setup: new Setup({
        type: "regular"
    }),
    contest: new Contest("basic"),
    board: board,
    mouse: mouse,
    engine: engine,
    render: render
});
game.start();