/**
 * Created by qhyang on 2017/1/17.
 */
import Rx from "rxjs/Rx";

let startRegularSetup = function (playerList, game) {

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