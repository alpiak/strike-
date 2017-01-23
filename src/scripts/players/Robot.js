/**
 * Created by qhyang on 2017/1/19.
 */
import Player from "./Player";

export default class extends Player {
    constructor (options) {
        super({
            name: options.name,
            pieceSet: options.pieceSet,
            pieceRadius: options.pieceRadius,
            pieceTotal: options.pieceTotal
        });
        this.type = "robot";
    }
}