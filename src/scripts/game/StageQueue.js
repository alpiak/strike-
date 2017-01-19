/**
 * Created by qhyang on 2017/1/18.
 */
export default class {

    constructor (options) {
        this.stageArray = new Array(options.length);
    }

    get length() {
        return this.stageArray.length;
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 * How many stages in the stage queue;
 *
 * @property length
 * @type number
 * @required
 */