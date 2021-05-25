"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionsIterator = void 0;
const coordinates_1 = require("./coordinates");
class InstructionsIterator {
    /**
     *
     */
    constructor(lawn, mower) {
        this.lawn = lawn;
        this.mower = mower;
    }
    //executes the instruction log and output the final mower position
    executeInstructionList(instructionList) {
        this.validateList(instructionList);
        this.initLawn(instructionList);
        const finalMowersPositions = [];
        for (let lineIndex = 1; lineIndex < instructionList.length; lineIndex++) {
            const line = instructionList[lineIndex];
            if (this.isInitMowerLine(lineIndex)) {
                this.initMower(line);
            }
            else {
                this.sendInstructionsToMower(line);
                finalMowersPositions.push(this.mower.getStatus());
            }
        }
        return finalMowersPositions;
    }
    sendInstructionsToMower(line) {
        const lineArr = line.split('');
        for (const instruction of lineArr) {
            this.mower.move(instruction);
        }
    }
    initMower(line) {
        const lineArr = line.split(' ');
        if (this.isInitInstructionValid(lineArr)) {
            throw new Error("init mower instruction row is invalid");
        }
        this.mower.setPosition(new coordinates_1.Coordinates(+lineArr[0], +lineArr[1]));
        this.mower.setInitialDirection(lineArr[2]);
    }
    isInitInstructionValid(lineArr) {
        return lineArr.length != 3 || isNaN(+lineArr[0]) || isNaN(+lineArr[1]);
    }
    isInitMowerLine(lineIndex) {
        return lineIndex % 2;
    }
    initLawn(instructionList) {
        const fistInstruction = instructionList[0];
        const firstInstructionArr = fistInstruction.split(' ');
        this.validateFirstInstruction(firstInstructionArr);
        this.lawn.setWidthAndHeight(+firstInstructionArr[0], +firstInstructionArr[1]);
    }
    validateFirstInstruction(firstInstructionArr) {
        if (firstInstructionArr.length != 2 || isNaN(+firstInstructionArr[0]) || isNaN(+firstInstructionArr[1])) {
            throw new Error("fist instruction row is invalid");
        }
    }
    validateList(instructionList) {
        if (instructionList == undefined || instructionList.length < 3) {
            throw new Error("instruction list not valid");
        }
    }
}
exports.InstructionsIterator = InstructionsIterator;
//# sourceMappingURL=instructionsIterator.js.map