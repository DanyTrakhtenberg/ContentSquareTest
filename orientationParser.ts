import { IOrientationParser } from "./iOrientationParser";
import { OrientationEnum } from "./rientationEnum";



export class OrientationParser implements IOrientationParser {

    public parseOrientation(orientationChar: string): OrientationEnum {
        this.validateOrientation(orientationChar);
            let orientationEnum = orientationChar as OrientationEnum;
            return orientationEnum;
    }

    private validateOrientation(orientationChar: string) {
        if (Object.values(OrientationEnum).some(e=> e == orientationChar) === false) {
            throw new Error(`Orientation character not valid - ${orientationChar}`);
        }
    }

}

