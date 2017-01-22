/**
 * Created by qhyang on 2017/1/17.
 */
import Rx from "rxjs/Rx";
import Matter from "matter-js";
import config from "../config.json";
import Piece from "./Piece";

let pieceRadius = config.gaming.piece.radius;

/**
 *
 * @param player {object} An instance of Player
 */
let startPlacingPiece = function(player) {
    let that = this,
        boardBounds = that.game.board.bounds,
        listen = function () {
            that.game.mouseConstraint.collisionFilter.mask = 0; // Disable mouse interaction with the pieces
            let subscriptionA = Rx.Observable.bindCallback(Matter.Events.on)(that.game.mouseConstraint, "mousedown")
                .filter(event =>
                    event.mouse.position.x >= boardBounds.min.x + pieceRadius
                    && event.mouse.position.x <= boardBounds.max.x - pieceRadius
                    && event.mouse.position.y >= boardBounds.min.y + pieceRadius
                    && event.mouse.position.y <= boardBounds.max.y - pieceRadius
                )
                .subscribe(event => {
                    let position = event.mouse.position,
                        sensor = Matter.Bodies.circle(position.x, position.y, 20, {
                            isSensor: true
                        }),
                        hasCollision = false;
                    subscriptionA.unsubscribe();
                    let subscriptionB = Rx.Observable.bindCallback(Matter.Events.on)(that.game.engine, "collisionStart")
                        .filter(event => {
                            let pairs = event.pairs;

                            for (let i = 0, j = pairs.length; i != j; ++i) {
                                let pair = pairs[i];

                                if (pair.bodyA === sensor
                                    || pair.bodyB === sensor
                                    && pair.bodyA !== that.game.board
                                    && pair.BodyB !== that.game.board) {
                                    return true;
                                }
                            }
                            return false;
                        })
                        .subscribe(() => {
                            subscriptionB.unsubscribe();
                            hasCollision = true;
                        });
                    Matter.World.add(that.game.engine.world, sensor);
                    let count = 0;
                    let runOnNextFrame = function () {
                            console.log(count, hasCollision);
                            if (Matter.Composite.get(that.game.engine.world, sensor.id, sensor.type)) {
                                if (hasCollision === true) {
                                    console.log("bad");
                                    Matter.Composite.remove(that.game.engine.world, sensor);
                                    listen();
                                } else if (count >= 5) {
                                    console.log("good");
                                    subscriptionB.unsubscribe();
                                    Matter.Body.set(sensor, {
                                        isSensor: false,
                                        frictionAir: 0.03,
                                        restitution: 0.65
                                    });
                                    player.pieceSet.add(new Piece({
                                        owner: player,
                                        body: sensor
                                    }));
                                    listen();
                                } else {
                                    count++;
                                    requestAnimationFrame(runOnNextFrame);
                                }
                            }
                        };
                    requestAnimationFrame(runOnNextFrame);
                });
        };

    listen();
    },
    startRegularSetup = function () {
        let playerQueue = this.game.playerQueue;
        startPlacingPiece.call(this, playerQueue.active);
    };

export default class {
    constructor (options) {
        switch (options.type) {
            case "regular":
                this.type = "regular";
                this.start = function () {
                    startRegularSetup.call(this);
                };
        }
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 * A `String` denoting the type of game setup. Values: "regular".
 *
 * @property type
 * @type string
 * @default "regular"
 */

/**
 * The game instance the setup belongs to.
 *
 * @property game
 * @type Game
 * @required
 */