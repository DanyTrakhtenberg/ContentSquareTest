"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lawn = void 0;
class Lawn {
    constructor() {
        this._width = 0;
        this._height = 0;
    }
    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
    positionIsValid(position) {
        if (position.x > this._width || position.y > this._height) {
            return false;
        }
        return true;
    }
    setWidthAndHeight(width, height) {
        if (height < 0) {
            throw new Error("lawn height is less then zero");
        }
        if (width < 0) {
            throw new Error("lawn width is less then zero");
        }
        this._width = width;
        this._height = height;
    }
}
exports.Lawn = Lawn;
//# sourceMappingURL=lawn.js.map