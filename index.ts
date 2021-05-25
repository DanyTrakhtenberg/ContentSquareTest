import { InstructionsIterator } from "./instructionsIterator";
import { Lawn } from "./lawn";
import { Mower } from "./mower";
import { NextDirection } from "./NextDirection";
import { OrientationParser } from "./orientationParser";
const fs = require('fs')

const lawn = new Lawn();
const mower = new Mower(lawn,new NextDirection(),new OrientationParser());


const inputFileLog = fs.readFileSync('input.txt', 'utf8');
const instructionArr = inputFileLog.split('\r\n');


const instructionIterator = new InstructionsIterator(lawn,mower);
const finalMowerPositions = instructionIterator.executeInstructionList(instructionArr);

fs.writeFile('output.txt', finalMowerPositions.join('\r\n'), function (err:Error) {
    if (err) return console.log(err);
  });