"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mower = void 0;
const coordinates_1 = require("./coordinates");
const OrientationEnum_1 = require("./OrientationEnum");
const directionEnum_1 = require("./directionEnum");
class Mower {
    constructor(lawn, nextDirection, orientationParser) {
        this.lawn = lawn;
        this.nextDirection = nextDirection;
        this.orientationParser = orientationParser;
        this.orientationEnum = OrientationEnum_1.OrientationEnum.Right;
        this.directionEnum = directionEnum_1.DirectionEnum.North;
        this.position = new coordinates_1.Coordinates(0, 0);
    }
    moveForward() {
        switch (this.directionEnum) {
            case directionEnum_1.DirectionEnum.West:
                if (this.position.x - 1 >= 0)
                    this.position.x = this.position.x - 1;
                break;
            case directionEnum_1.DirectionEnum.East:
                if (this.position.x + 1 <= this.lawn.width)
                    this.position.x = this.position.x + 1;
                break;
            case directionEnum_1.DirectionEnum.South:
                if (this.position.y - 1 >= 0)
                    this.position.y = this.position.y - 1;
                break;
            case directionEnum_1.DirectionEnum.North:
                if (this.position.y + 1 <= this.lawn.height)
                    this.position.y = this.position.y + 1;
                break;
        }
    }
    getStatus() {
        return `${this.position.x} ${this.position.y} ${this.directionEnum}`;
    }
    setInitialDirection(directionChar) {
        this.directionEnum = this.nextDirection.parseDirection(directionChar);
    }
    setPosition(position) {
        if (this.lawn.positionIsValid(position) === false) {
            throw new Error(`coordinated x- ${position.x} y- ${position.y} out of bounce`);
        }
        this.position = position;
    }
    move(instructionChar) {
        switch (instructionChar) {
            case 'L': // rotate left
            case 'R': // rotate right
                const orientationEnum = this.orientationParser.parseOrientation(instructionChar);
                this.directionEnum = this.nextDirection.getNextDirectionFromOrientation(orientationEnum, this.directionEnum);
                break;
            case 'F': // move forward
                this.moveForward();
        }
    }
}
exports.Mower = Mower;
//# sourceMappingURL=mower.js.map