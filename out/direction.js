"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
const instructionEnum_1 = require("./instructionEnum");
const directionEnum_1 = require("./directionEnum");
class Direction {
    constructor() {
        this.nextOrientationDictionary = {
            [directionEnum_1.DirectionEnum.North]: {
                [instructionEnum_1.InstructionEnum.Left]: directionEnum_1.DirectionEnum.West,
                [instructionEnum_1.InstructionEnum.Right]: directionEnum_1.DirectionEnum.East
            },
            [directionEnum_1.DirectionEnum.East]: {
                [instructionEnum_1.InstructionEnum.Left]: directionEnum_1.DirectionEnum.North,
                [instructionEnum_1.InstructionEnum.Right]: directionEnum_1.DirectionEnum.South
            },
            [directionEnum_1.DirectionEnum.South]: {
                [instructionEnum_1.InstructionEnum.Left]: directionEnum_1.DirectionEnum.East,
                [instructionEnum_1.InstructionEnum.Right]: directionEnum_1.DirectionEnum.West
            },
            [directionEnum_1.DirectionEnum.West]: {
                [instructionEnum_1.InstructionEnum.Left]: directionEnum_1.DirectionEnum.South,
                [instructionEnum_1.InstructionEnum.Right]: directionEnum_1.DirectionEnum.North,
            },
        };
    }
    parseDirection(directionChar) {
        this.validateDirection(directionChar);
        const x = directionEnum_1.DirectionEnum.East;
        // let directionEnum = DirectionEnum['North'];
        let directionEnum = directionChar;
        return directionEnum;
    }
    getNextDirectionFromOrientation(orientationEnum, directionChar) {
        let directionEnum = this.parseDirection(directionChar);
        let nextDirectionEnum = this.nextOrientationDictionary[directionEnum][orientationEnum];
        return nextDirectionEnum;
    }
    validateDirection(directionChar) {
        if (Object.values(directionEnum_1.DirectionEnum).some(e => e === directionChar) == false) {
            throw new Error(`direction character not valid - ${directionChar}`);
        }
    }
}
exports.Direction = Direction;
//# sourceMappingURL=direction.js.map