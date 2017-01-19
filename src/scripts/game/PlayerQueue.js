/**
 * Created by qhyang on 2017/1/17.
 */
export default class {
    constructor (options) {
        this.players = options.players;
        if (typeof options.active === "number") {
            this._active = options.active;
        } else {
            this._active = 0;
        }
    }

    next() {
        if (this._active >= this.players.length) {
            this._active = 0;
        } else {
            this._active = this._active + 1;
        }
        return this.players[this._active];
    }

    get active() {
        return this.players[this._active];
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