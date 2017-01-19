/**
 * Created by qhyang on 2017/1/19.
 */
export default class {
    constructor (options) {
        this.name = options.name;
        this.pieceSet = [];
    }

    addPiece(piece) {
        this.pieceSet.push(piece);
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 *A `String` denoting the type of player. Values: "human", "robot".
 *
 * @property type
 * @type string
 * @default "AI"
 */

/**
 *A `String` denoting the name of player.
 *
 * @property name
 * @type string
 * @required
 */