"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinates = void 0;
class Coordinates {
    /**
     *
     */
    constructor(x, y) {
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    set x(v) {
        if (v < 0) {
            throw new Error("x position is less then zero");
        }
        this._x = v;
    }
    get y() {
        return this._y;
    }
    set y(v) {
        if (v < 0) {
            throw new Error("y position is less then zero");
        }
        this._y = v;
    }
}
exports.Coordinates = Coordinates;
//# sourceMappingURL=coordinates.js.map