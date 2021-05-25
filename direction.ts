import { InstructionEnum } from "./instructionEnum";
import { DirectionEnum } from "./directionEnum";
import { OrientationEnum } from "./rientationEnum";


export class Direction {

    private nextOrientationDictionary: {
        [key in DirectionEnum]: {
            [key in OrientationEnum]: DirectionEnum;
        };
    } = {
            [DirectionEnum.North]: {
                [InstructionEnum.Left]: DirectionEnum.West,
                [InstructionEnum.Right]: DirectionEnum.East
            },
            [DirectionEnum.East]: {
                [InstructionEnum.Left]: DirectionEnum.North,
                [InstructionEnum.Right]: DirectionEnum.South
            },
            [DirectionEnum.South]: {
                [InstructionEnum.Left]: DirectionEnum.East,
                [InstructionEnum.Right]: DirectionEnum.West
            },
            [DirectionEnum.West]: {
                [InstructionEnum.Left]: DirectionEnum.South,
                [InstructionEnum.Right]: DirectionEnum.North,
            },
        };

    public parseDirection(directionChar: string):DirectionEnum{
        this.validateDirection(directionChar);
        const x = DirectionEnum.East;
        // let directionEnum = DirectionEnum['North'];
         let directionEnum = directionChar as DirectionEnum;

        return directionEnum;
    }

    public getNextDirectionFromOrientation(orientationEnum: OrientationEnum, directionChar: string): DirectionEnum{
        let directionEnum = this.parseDirection(directionChar);
        let nextDirectionEnum = this.nextOrientationDictionary[directionEnum][orientationEnum];
        return nextDirectionEnum;
    } 

    private validateDirection(directionChar: string) {
        if (Object.values(DirectionEnum).some(e=>e === directionChar)==false) {
            throw new Error(`direction character not valid - ${directionChar}`);
        }
    }
    
}
