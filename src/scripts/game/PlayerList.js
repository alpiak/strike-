/**
 * Created by qhyang on 2017/1/17.
 */
export default class {
    constructor (options) {
        this.players = options.players;
        if (typeof options.active === "number") {
            this.active = options.active;
        } else {
            this.active = 0;
        }

    }

    players;
    active;

    next() {
        if (this.active >= players.length) {
            this.active = 0;
        } else {
            this.active++;
        }
        return players[active];
    }
}