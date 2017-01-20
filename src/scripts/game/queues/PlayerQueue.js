/**
 * Created by qhyang on 2017/1/17.
 */
import Queue from "./Queue";

export default class extends Queue {
    constructor (options) {
        super({
            items: options.players,
            loop: options.loop
        });
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 * An array of players;
 *
 * @property players
 * @type object
 * @required
 */

/**
 * The index of the active players;
 *
 * @property active
 * @type number
 * @readonly
 */