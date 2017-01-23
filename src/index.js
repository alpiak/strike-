/**
 * Created by qhyang on 2017/1/13.
 */
import Matter from "matter-js";
import Game from "./scripts/Game";
import Human from "./scripts/players/Human";
import Robot from "./scripts/players/Robot";
import PlayerQueue from "./scripts/queues/PlayerQueue";
import Setup from "./scripts/Setup";
import Contest from "./scripts/Contest";

let game = new Game({
    playerQueue: new PlayerQueue({
        players: [
            new Human({
                name: "playerA",
                pieceRadius: 30
            }),
            new Human({
                name: "playerB"
            })
        ],
        loop: true
    }),
    setup: new Setup({
        type: "regular"
    }),
    contest: new Contest({
        type: "basic"
    }),
    board: Matter.Bodies.rectangle(400, 400, 600, 600, {
        label: "board",
        isSensor: true,
        isStatic: true
    }),
    engine: Matter.Engine.create({
        world: Matter.World.create({
            gravity: {
                x: 0,
                y: 0
            }
        })
    }),
    render: {
        engine: "Matter.js",
        options: {
            height: 800,
            width: 800
        }
    }
});
game.start();