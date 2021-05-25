import { OrientationEnum } from "./OrientationEnum";

export interface IOrientationParser {
    parseOrientation(orientationChar: string): OrientationEnum;
}

