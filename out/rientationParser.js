"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrientationParser = void 0;
const OrientationEnum_1 = require("./OrientationEnum");
class OrientationParser {
    parseOrientation(orientationChar) {
        this.validateOrientation(orientationChar);
        let orientationEnum = orientationChar;
        return orientationEnum;
    }
    validateOrientation(orientationChar) {
        if (Object.values(OrientationEnum_1.OrientationEnum).some(e => e == orientationChar) === false) {
            throw new Error(`Orientation character not valid - ${orientationChar}`);
        }
    }
}
exports.OrientationParser = OrientationParser;
//# sourceMappingURL=rientationParser.js.map