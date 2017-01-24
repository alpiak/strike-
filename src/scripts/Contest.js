/**
 * Created by qhyang on 2017/1/18.
 */
import StageQueue from "./queues/StageQueue";

function startRegularContest() {
    console.log("contest start");
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