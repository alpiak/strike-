/**
 * Created by qhyang on 2017/1/17.
 */
import Rx from "rxjs/Rx";
import Matter from "matter-js";
import Piece from "./Piece";
import decideMoveCount from "./utilities/decideMoveCount";
import placePieceWithCollisionCheck from "./utilities/placePieceWithCollisionCheck";

/**
 * Start a piece placing turn for a player.
 *
 * @function startPlacingPiece
 * @param player {object} An instance of Player
 * @param pieceTotal {number} How many pieces the play should place in this phase
 * @param completeCallback {function} The callback when a piece is placed successfully
 */
let startPlacingPiece = function(player, pieceTotal, completeCallback) {
        let that = this,
            boardBounds = that.game.board.bounds,
            pieceCount = 0,
            listen = function () {
                if (pieceCount < pieceTotal) {
                    that.game.mouseConstraint.collisionFilter.mask = 0; // Disable mouse interaction with the pieces
                    let pieceRadius = player.pieceRadius,
                        subscription = Rx.Observable.create(subscriber => {
                            Matter.Events.on(that.game.mouseConstraint, "mousedown", event => {
                                subscriber.next(event);
                            });
                        })
                            .filter(event =>
                                event.mouse.position.x >= boardBounds.min.x + pieceRadius
                                && event.mouse.position.x <= boardBounds.max.x - pieceRadius
                                && event.mouse.position.y >= boardBounds.min.y + pieceRadius
                                && event.mouse.position.y <= boardBounds.max.y - pieceRadius
                            )
                            .subscribe(event => {
                                let position = event.mouse.position,
                                    pieceBody = Matter.Bodies.circle(position.x, position.y, pieceRadius, {
                                        frictionAir: 0.03,
                                        restitution: 0.65
                                    });
                                subscription.unsubscribe();
                                placePieceWithCollisionCheck(pieceBody, that.game.engine, [that.game.board], () => {
                                    console.log("good");
                                    player.pieceSet.add(new Piece({
                                        owner: player,
                                        body: pieceBody
                                    }));
                                    pieceCount++;
                                    listen();
                                }, () => {
                                    console.log("bad");
                                    listen();
                                });
                            });
                } else {
                    completeCallback();
                }

            };
        listen();
        },
    startRegularSetup = function (completeCallback) {
        let that = this,
            playerQueue = that.game.playerQueue,
            startNewTurn = (function() {
                let checkComplete = function () {
                    for (let i = 0, len = playerQueue.length; i < len; i++) {
                        let player = playerQueue.get(i);
                        if (player.pieceSet.length !== player.pieceTotal) {
                            return false;
                        }
                    }
                    return true;
                };
                return function () {
                    if (!checkComplete()) {
                        startPlacingPiece.call(that, playerQueue.active, decideMoveCount(playerQueue.active, playerQueue), () => {
                            playerQueue.next();
                            startNewTurn();
                        });
                    } else {
                        completeCallback();
                    }
                };
            }());
        startNewTurn();
    };

export default class {
    constructor (options) {
        switch (options.type) {
            case "regular":
                this.type = "regular";
                this.start = function (completeCallback) {
                    startRegularSetup.call(this, completeCallback);
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