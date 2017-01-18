/**
 * Created by qhyang on 2017/1/17.
 */
import Rx from "rxjs/Rx";
import Matter from "matter-js";
import mouseConstraint from "../physics/mouseConstraint";

let startRegularSetup = function () {
    let catchMouseDownAsObservable = Rx.Observable.create(observer => {
        Matter.Events.on(mouseConstraint, "mousedown", event => {
            observer.next(event);
        });
    });
    catchMouseDownAsObservable.scan();
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
 *A `String` denoting the type of game setup. Values: "regular".
 *
 * @property type
 * @type string
 * @default "regular"
 */