/**
 * Created by qhyang on 2017/1/19.
 */
import PieceSet from "../PieceSet";

export default class {
    constructor (options) {
        this.name = options.name;
        this.pieceSet = options.pieceSet || new PieceSet();
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 * A `String` denoting the type of player. Values: "human", "robot".
 *
 * @property type
 * @type string
 * @default "AI"
 */

/**
 * A `String` denoting the name of player.
 *
 * @property name
 * @type string
 * @required
 */

/**
 * A set of the pieces the user owns.
 *
 * @property pieceSet
 * @type pieceSet
 */