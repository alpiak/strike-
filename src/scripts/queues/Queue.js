/**
 * Created by qhyang on 2017/1/20.
 */
export default class {
    get active() {
        return this._items[this._active];
    }
    get length() {
        if (typeof this._length === "number") {
            return this._length;
        } else {
            return this._items.length;
        }
    }

    constructor (options) {
        if (typeof options.items === "object") {
            this._items = options.items;
        }
        if (typeof options.length === "number") {
            this._length = options.length;
        }
        if (typeof options.loop === "boolean") {
            this._loop = options.loop;
        } else {
            this._loop = false;
        }
        if (typeof options.active === "number") {
            this._active = options.active;
        } else {
            this._active = 0;
        }
    }

    next() {
        if (this._active >= this._items.length) {
            this._active = 0;
        } else if (this._loop === true) {
            this._active = this._active + 1;
        }
        return this._items[this._active];
    }
    isEnd() {
        if (this._loop === true) {
            return false;
        } else {
            return this._active === this._items.length - 1;
        }
    }
    isLoop() {
        return this._loop;
    }
}

/*
 *
 * Properties Documentation
 *
 */

/**
 * The length of the queue;
 *
 * @property length
 * @type number
 * @readonly
 */