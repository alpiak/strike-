/**
 * Created by qhyang on 2017/1/18.
 */
import StageQueue from "./StageQueue";

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
 *
 *
 * @property type
 * @type string
 * @required
 */