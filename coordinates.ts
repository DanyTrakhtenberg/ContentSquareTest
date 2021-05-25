export class Coordinates {

  private _x: number = 0;
  public get x(): number {
    return this._x;
  }
  public set x(v: number) {
    if (v < 0) {
      throw new Error("x position is less then zero");
    }
    this._x = v;
  }


  private _y: number = 0;
  public get y(): number {
    return this._y;
  }
  public set y(v: number) {
    if (v < 0) {
      throw new Error("y position is less then zero");
    }
    this._y = v;
  }
  /**
   *
   */
  constructor(x:number,y:number) {
    this._x=x;
    this._y=y;
  }
}


