import { Coordinates } from "./coordinates";

export class Lawn {

    private _width: number = 0;
    private _height: number = 0;
    public get width(): number {
        return this._width;
    }

    public get height(): number {
        return this._height;
    }

     positionIsValid(position: Coordinates): boolean {
        if (position.x > this._width || position.y > this._height) {
            return false;
        }
        return true;
    }

    setWidthAndHeight(width: number, height: number) {
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
