import { Lawn } from "./lawn";
import { Coordinates } from "./coordinates";
import { IOrientationParser } from "./iOrientationParser";
import { NextDirection } from "./NextDirection";
import { OrientationEnum } from "./OrientationEnum";
import { DirectionEnum } from "./directionEnum";

export class Mower {

  private orientationEnum: OrientationEnum = OrientationEnum.Right;
  private directionEnum: DirectionEnum = DirectionEnum.North;
  private position: Coordinates;

  constructor(private lawn: Lawn, private nextDirection: NextDirection, private orientationParser: IOrientationParser) {
    this.position = new Coordinates(0, 0);
  }

  private moveForward() {
    switch (this.directionEnum) {
      case DirectionEnum.West:
        if (this.position.x - 1 >= 0) this.position.x = this.position.x - 1;
        break;
      case DirectionEnum.East:
        if (this.position.x + 1 <= this.lawn.width) this.position.x = this.position.x + 1;
        break;
      case DirectionEnum.South:
        if (this.position.y - 1 >= 0) this.position.y = this.position.y - 1;
        break;
      case DirectionEnum.North:
        if (this.position.y + 1 <= this.lawn.height) this.position.y = this.position.y + 1;
        break;
    }
  }

  public getStatus(): string {
    return `${this.position.x} ${this.position.y} ${this.directionEnum}`;
  }

  public setInitialDirection(directionChar: string) {
    this.directionEnum = this.nextDirection.parseDirection(directionChar);
  }

  public setPosition(position: Coordinates) {
    if (this.lawn.positionIsValid(position) === false) {
      throw new Error(`coordinated x- ${position.x} y- ${position.y} out of bounce`);
    }
    this.position = position
  }

  public move(instructionChar: string) {
    switch (instructionChar) {
      case 'L': // rotate left
      case 'R': // rotate right
        const orientationEnum = this.orientationParser.parseOrientation(instructionChar);
        this.directionEnum = this.nextDirection.getNextDirectionFromOrientation(orientationEnum, this.directionEnum);
        break;
      case 'F': // move forward
        this.moveForward();
    }
  }


}


