import Sprite from "./sprite";

export default class MoveableSprite extends Sprite {
  velocity: Coordinatable;

  constructor(options: MoveableSpriteOptions) {
    super(options);
    this.velocity = options.velocity;
  }

  addToPosition({ x, y }: Coordinatable): void {
    this.addToPositionByAxis(x, Sprite.axes.x);
    this.addToPositionByAxis(y, Sprite.axes.y);
  }

  addToPositionByAxis(addedCoordinates: number, axis: Axes): void {
    const newCoordinates = this.getPositionByAxis(axis) + addedCoordinates;

    this.setPositionByAxis(newCoordinates, axis);
  }

  getVelocity(): Coordinatable {
    return this.velocity;
  }

  getVelocityByAxis(axis: Axes): number {
    return this.velocity[axis];
  }

  setVelocity(velocity: Coordinatable): void {
    this.velocity = velocity;
  }

  setVelocityByAxis(velocity: number, axis: Axes): void {
    this.velocity[axis] = velocity;
  }
}
