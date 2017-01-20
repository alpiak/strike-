/**
 * Created by qhyang on 2017/1/20.
 */
export default class {
    constructor (options) {
        if (options) {
            this._pieces = options.pieces || [];
        } else {
            this._pieces = [];
        }
    }

    add(piece) {
        this._pieces.push(piece);
        return piece;
    }
    remove(piece) {
        for (let i = 0; i < this._pieces.length; i++) {
            if (piece === this._pieces[i]) {
                this._pieces.splice(i, 0);
                return piece;
            }
        }
    }
    getAll() {
        return _pieces;
    }
}