import { OrientationEnum } from "./rientationEnum";

export interface IOrientationParser {
    parseOrientation(orientationChar: string): OrientationEnum;
}

