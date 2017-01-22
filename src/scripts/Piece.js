/**
 * Created by qhyang on 2017/1/20.
 */
export default class {
    constructor (options) {
        this.owner = options.owner || null;
        this.body = options.body;
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 * the owner of the piece;
 *
 * @property owner
 * @type Player
 */

/**
 * The physical body of the piece;
 *
 * @property body
 * @type Body
 */