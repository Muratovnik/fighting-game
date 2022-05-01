import MoveableSprite from "./moveableSprite";

export default class GravitableSprite extends MoveableSprite {
  gravity: number;

  constructor(options: GravitableSpriteOptions) {
    super(options);

    this.gravity = options.gravity
  }

  update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    this.draw(ctx)

    const gravityAxis = "y";

    this.setPositionByAxis(this.getPositionByAxis(gravityAxis) + this.getVelocityByAxis(gravityAxis), gravityAxis);

    if (this.checkExtremePositionByAxis(gravityAxis, canvas)) {
      this.disableVelocityByAxis(gravityAxis);
    } else {
      this.setVelocityByAxis(this.getVelocityByAxis(gravityAxis) + this.gravity, gravityAxis);
    }
  }

  checkExtremePositionByAxis(axis: Axes, canvas: HTMLCanvasElement) {
    const currentPosition: number = this.getPositionByAxis(axis);
    const currentVelocity: number = this.getVelocityByAxis(axis);
    const curentSize: number = axis === "x" ? this.getSize().width : this.getSize().height;
    const canvasSize: number = axis === "x" ? canvas.width : canvas.height;

    const isInExtremePosition: boolean = currentPosition + currentVelocity + curentSize >= canvasSize;

    return isInExtremePosition;
  }

  disableVelocityByAxis(axis: Axes) {
    this.setVelocityByAxis(0, axis);
  }
}
