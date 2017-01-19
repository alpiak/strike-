/**
 * Created by qhyang on 2017/1/13.
 */
import Game from "./scripts/game/Game";
import Human from "./scripts/game/players/Human";
import Robot from "./scripts/game/players/Robot";
import PlayerQueue from "./scripts/game/playerQueue";
import Setup from "./scripts/game/Setup";
import Contest from "./scripts/game/Contest";
import render from "./scripts/render/render";
import engine from "./scripts/physics/engine";
import mouseConstraint from "./scripts/physics/mouseConstraint";
import board from "./scripts/physics/board";

let game = new Game({
    playerQueue: new PlayerQueue({
        players: [
            new Human({
                name: "playerA"
            }),
            new Human({
                name: "playerB"
            })
        ]
    }),
    setup: new Setup({
        type: "regular"
    }),
    contest: new Contest({
        type: "basic"
    }),
    board: board,
    mouseConstraint: mouseConstraint,
    engine: engine,
    render: render
});
game.start();