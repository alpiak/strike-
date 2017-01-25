/**
 * Created by qhyang on 2017/1/18.
 */
import Rx from "rxjs/Rx";
import Matter from "matter-js";
import StageQueue from "./queues/StageQueue";
import placePieceWithCollisionCheck from "./utilities/placePieceWithCollisionCheck";

function startRegularContest() {
    let that = this;
    that.game.mouseConstraint.constraint.stiffness  = 3; // make the mouse constraint stiff
    let playerQueue = that.game.playerQueue,
        startNewTurn = (function () {
            that.game.mouseConstraint.collisionFilter.mask = 0x0002;
            let startMove = function (player, moveTotal, completeCallback) {
                    let moveCount = 0,
                        listen = function () {
                            let striker;
                            Rx.Observable.create(subscriber => {
                                let mouseUp = function () {
                                    Matter.Composite.remove(that.game.engine.world, striker);
                                };
                                Matter.Events.on(that.game.mouseConstraint, "mouseup", mouseUp);
                                Matter.Events.on(that.game.mouseConstraint, "mousedown", event => {
                                    subscriber.next(event);
                                });
                            })
                                .map(event => {
                                    let position = event.mouse.position;
                                    striker = Matter.Bodies.circle(position.x, position.y, player.strikerRadius, {
                                        frictionAir: 0.03,
                                        restitution: 0.65,
                                        collisionFilter: {
                                            category: 0x0002
                                        }
                                    });
                                    return Rx.Observable.create(subscriber => {
                                        placePieceWithCollisionCheck(striker, that.game.engine, [that.game.board], () => {
                                            subscriber.next({
                                                status: "success",
                                                target: striker
                                            });
                                        }, () => {
                                            subscriber.next({
                                                status: "fail"
                                            });
                                        });
                                    });
                                })
                                .mergeAll()
                                .subscribe(event => {
                                    if (event.status === "success") {
                                        that.game.mouseConstraint.bodyB = event.target;
                                    }
                                });
                        };
                        listen();
                };
            return function () {
                startMove.call(this, playerQueue.active, 1, function () {

                });
            };
        }());
    startNewTurn();
}

export default class {
    constructor (options) {
        switch (options.type) {
            case "basic":
                this.type = "basic";
                this.stageQueue = new StageQueue(1);
                this.start = function () {
                    startRegularContest.call(this);
                };
                break;
        }
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 * A `String` denoting the type of game setup. Values: "basic".
 *
 * @property type
 * @type string
 * @required
 */