"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instructionsIterator_1 = require("./instructionsIterator");
const lawn_1 = require("./lawn");
const mower_1 = require("./mower");
const NextDirection_1 = require("./NextDirection");
const orientationParser_1 = require("./orientationParser");
const fs = require('fs');
const lawn = new lawn_1.Lawn();
const mower = new mower_1.Mower(lawn, new NextDirection_1.NextDirection(), new orientationParser_1.OrientationParser());
const inputFileLog = fs.readFileSync('input.txt', 'utf8');
const instructionArr = inputFileLog.split('\r\n');
const instructionIterator = new instructionsIterator_1.InstructionsIterator(lawn, mower);
const finalMowerPositions = instructionIterator.executeInstructionList(instructionArr);
fs.writeFile('output.txt', finalMowerPositions.join('\r\n'), function (err) {
    if (err)
        return console.log(err);
});
//# sourceMappingURL=index.js.map