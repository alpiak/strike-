/**
 * Created by qhyang on 2017/1/17.
 */
import Rx from "rxjs/Rx";
import Matter from "matter-js";
import mouseConstraint from "../physics/mouseConstraint";

/**
 *
 * @param game {object} the game instance of the setup
 */
let startRegularSetup = function (game) {
    let playerQueue = game.playerQueue;

    /**
     *
     * @param player {object} An instance of Player
     */
    function startPlacingPiece(player) {
        let catchMouseDownAsObservable = Rx.Observable.create(subscriber => {
            Matter.Events.on(mouseConstraint, "mousedown", event => {
                subscriber.next(event);
            });
        });
        catchMouseDownAsObservable.filter(event => {
            return true;
        })
            .subscribe(event => {
                console.log(event);
            });
    }

    startPlacingPiece(playerQueue.active);
};

export default class {
    constructor (options) {
        switch (options.type) {
            case "regular":
                this.type = "regular";
                this.start = startRegularSetup;
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