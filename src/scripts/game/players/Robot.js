/**
 * Created by qhyang on 2017/1/19.
 */
import Player from "./Player";

export default class extends Player {
    constructor (options) {
        super({
            name: options.name
        });
        this.type = "robot";
    }
}