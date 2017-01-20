/**
 * Created by qhyang on 2017/1/18.
 */
import StageQueue from "./queues/StageQueue";

export default class {
    constructor (options) {
        if (options.type === "basic") {
            this.stageQueue = new StageQueue(1);
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