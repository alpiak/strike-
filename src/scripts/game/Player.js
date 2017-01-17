/**
 * Created by qhyang on 2017/1/16.
 */
export default class {
    constructor (options) {
        if (options.type) {
            this.type = options.type;
        } else {
            this.type = "AI";
        }
        this.name = options.name;
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 *A `String` denoting the type of player. Values: "humans", "AI".
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
