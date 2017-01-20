/**
 * Created by qhyang on 2017/1/18.
 */
import Queue from "./Queue";

export default class extends Queue {
    constructor (options) {
        super({
            length: options.length
        });
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 * An array of game contest stages;
 *
 * @property players
 * @type object
 * @required
 */

/**
 * The index of the active stage;
 *
 * @property active
 * @type number
 * @readonly
 */