/**
 * Created by qhyang on 2017/1/16.
 */
export default class {
    static create(options) {
        let player = {};
        if (options.type) {
            player.type = options.type;
        } else {
            player.type = "AI";
        }
        return player;
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

