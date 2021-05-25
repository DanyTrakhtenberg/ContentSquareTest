import { Coordinates } from "./coordinates";
import { Lawn } from "./lawn";
import { Mower } from "./mower";



export class InstructionsIterator {

    /**
     *
     */
    constructor(private lawn: Lawn, private mower: Mower) { }

    //executes the instruction log and output the final mower position
    public executeInstructionList(instructionList: string[]): string[] {
        this.validateList(instructionList);
        this.initLawn(instructionList);
        const finalMowersPositions: string[] = [];
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

    private sendInstructionsToMower(line: string) {
        const lineArr = line.split('');
        for (const instruction of lineArr) {
            this.mower.move(instruction);
        }
    }

    private initMower(line: string) {
        const lineArr = line.split(' ');
        if (this.isInitInstructionValid(lineArr)) {
            throw new Error("init mower instruction row is invalid");
        }
        this.mower.setPosition(new Coordinates(+lineArr[0], +lineArr[1]));
        this.mower.setInitialDirection(lineArr[2]);
    }

    private isInitInstructionValid(lineArr: string[]) {
        return lineArr.length != 3 || isNaN(+lineArr[0]) || isNaN(+lineArr[1]);
    }

    private isInitMowerLine(lineIndex: number) {
        return lineIndex % 2;
    }

    private initLawn(instructionList: string[]) {
        const fistInstruction = instructionList[0];
        const firstInstructionArr = fistInstruction.split(' ');
        this.validateFirstInstruction(firstInstructionArr);
        this.lawn.setWidthAndHeight(+firstInstructionArr[0], +firstInstructionArr[1]);
    }

    private validateFirstInstruction(firstInstructionArr: string[]) {
        if (firstInstructionArr.length != 2 || isNaN(+firstInstructionArr[0]) || isNaN(+firstInstructionArr[1])) {
            throw new Error("fist instruction row is invalid");
        }
    }

    private validateList(instructionList: string[]) {
        if (instructionList == undefined || instructionList.length < 3) {
            throw new Error("instruction list not valid");
        }
    }
}
